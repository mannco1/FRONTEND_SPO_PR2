
import 'bootstrap/dist/css/bootstrap.min.css';

import Validation_p from './Validation_p';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';






const App = () => {


  return (
    
   <Router>
      
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/val" element={<Validation_p/>} />
        
      </Routes>
    
  </Router>
   
  )
}

export default App;
