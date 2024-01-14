import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import './App.css';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write-blog" element={<CreateBlog />} />
      <Route path="/blog/:slug" element={<Blog />} />
    </Routes>
  );
}

export default App;
