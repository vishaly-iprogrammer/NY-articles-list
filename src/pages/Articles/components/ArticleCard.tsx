import { Link } from "react-router-dom";

const ArticleCard = ({ article }: any) => {
    const image = article?.media?.[0]?.['media-metadata']?.[2]?.url;

  return (
    <Link to={`/article/${article.id}`} className="card">
          <div>
              {
                  image? <img src={image} alt="Article image" />:<div className="image_null">No image found</div>
              }
             
        <h3>{article.title}</h3>
        <p>{article.abstract}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
