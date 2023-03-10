import React from 'react';
import Homepage from './Homepage';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
/*import { BrowserRouter,Routes,Route } from 'react-router-dom';*/

const App = () => {
  return (
    <>
    {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='./Components/About' element={< About />}></Route>
          <Route exact path='./Components/Projects' element={< Projects />}></Route>
          <Route exact path='./Components/Certificates' element={<Certificates />}></Route>
          <Route exact path='./Components/Contact' element={< Contact />}></Route>
        </Routes>
  </BrowserRouter>*/}
      <Homepage/>
      <About />
      <Projects />
      <Certificates/>
      <Contact />
    </>
  )
}

export default App;