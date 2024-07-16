import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import Header from '../../../components/Header';
import { Spin } from 'antd';

const ArticleDetailpage = () => {
    const { id } = useParams<{ id: string }>();
    const articleId = id ? parseInt(id, 10) : 0; 
    const { articles, loading } = useFetchData();
  const article = articles.find(article => article.id === articleId);
  const image = article?.media?.[0]?.['media-metadata']?.[2]?.url;
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div>
      <Header title={`${article?.title}`} />
      <div className="detail_page">
        <div className='main_box'>
          <img className="image" src={image} alt="" />
          <p className='publishDate'>Published at: { article?.published_date}</p>
          <div className="label_box">
            {article?.des_facet.map((item:string,index:number) => (
              <span key={index} className='lable'>{item}</span>
            ))}
          </div>
          <p className="article-content">{`${article?.abstract}`} <a href={article?.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
          <p  className='byWriter'>~{ article?.byline}</p>
       </div>
     </div>
    </div>
  )
}

export default ArticleDetailpage
