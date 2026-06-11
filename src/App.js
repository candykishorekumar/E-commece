
import './App.css';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Register from './component/Register';
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register'  element={< Register/>}> </Route>
          <Route path='/'  element={< Auth/>}> </Route>
          <Route path='/dashboard'  element={< Dashboard/>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
