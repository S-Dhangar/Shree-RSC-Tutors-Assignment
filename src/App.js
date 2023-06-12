import Firstpage from './Firstpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Secondpage from './Secondpage';
 
function App() {
  const style = {
    padding:"60px",
    background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    overflow: 'hidden',
  }
  return (
    <div className="App" style={style}>
     <Router>
      <Routes>
        <Route path="/" element={ <Firstpage/>} />
        <Route path="/second" element={<Secondpage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
