
import 'bootstrap/dist/css/bootstrap.min.css';

import Validation_P from './Validation_P';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';






const App = () => {


  return (
    
   <Router>
      
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    
  </Router>
   
  )
}

export default App;
