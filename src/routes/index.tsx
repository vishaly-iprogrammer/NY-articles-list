import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from '../pages/Articles';
import ArticleDetailpage from '../pages/Articles/components/ArticleDetailpage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList/>} />
        <Route path="/article/:id" element={<ArticleDetailpage/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
