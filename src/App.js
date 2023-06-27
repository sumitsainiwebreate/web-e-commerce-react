import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
