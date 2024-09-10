
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Services from './Services/Services';
// import Main from './Main/Main';
// import MyCarousel from './Carousel/carousel';
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './pages/Footer/Footer.css';
import './Home/Home.css'
import './Carousel/carousel.css';

function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/Main" element={<Main />} />
    </Routes>
    <CustomLink to="/Main"></CustomLink> */}
     <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
      {/* <MyCarousel /> */}
      <Footer />
    </>
  )

  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvedPath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
  //   return (
  //     <li className={isActive ? "active" : "" }>
  //       <Link to={to} {...props}>
  //         {children}
  //         </Link>
  //     </li>
  //   )
  // }
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }