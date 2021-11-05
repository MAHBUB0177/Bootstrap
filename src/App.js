import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import News from './Component/News/News';
import TopHeadLine from './Component/TopHeadLine/TopHeadLine';
import Material from './Component/Material UI/Material';


function App() {
  return (
    <div className="App">
     
     <Header />
     {/* <Material /> */}
  
     <TopHeadLine />
    </div>
  );
}

export default App;
