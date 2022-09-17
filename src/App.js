import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Post from './components/Post';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:slug/:id" element={<Post />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
