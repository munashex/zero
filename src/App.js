
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react' 
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home' 
import Projects from './Pages/Projects' 
import Resume from './Pages/Resume' 


const App = () => {

return (
<HashRouter> 
<Routes>
  <Route path="/" element={<Home/>}/> 
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/resume" element={<Resume/>}/> 
</Routes>
</HashRouter>
)
}

export default App