import { Col, Row, Spin } from "antd";
import useFetchData from "../../hooks/useFetchData";
import ArticleCard from "./components/ArticleCard";
import "./styles.scss"
import Header from "../../components/Header";
const ArticleList = () => {
  const { articles, loading } = useFetchData();
    return (
      <div>
            <Header title="Most Viewed Articles" />
            <div className="layout_article">
         
         <Row gutter={16} className="rowBox">
           {loading ? (
             <div className="spinner-row">
               {" "}
               <Spin size="large" />
             </div>
           ) : (
            articles.length>0? articles.map((item: any, index: number) => (
               <Col key={index} span={8} lg={6}>
                 <ArticleCard article={item} />
               </Col>
             )):"No articles found"
           )}
         </Row>
       </div>
      </div>
   
  );
};

export default ArticleList;
