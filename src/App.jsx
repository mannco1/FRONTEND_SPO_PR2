
import 'bootstrap/dist/css/bootstrap.min.css';

import Validation_p from './Validation_p';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';






const App = () => {


  return (
    
   <Router>
      
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/val" element={<Profile/>} />
        
      </Routes>
    
  </Router>
   
  )
}

export default App;
