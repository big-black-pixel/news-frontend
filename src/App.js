import Header from "./components/headers/Header";
import MainPage from "./components/main/MainPage";
import SecondHeader from "./components/headers/SecondHeader";
import Categories from "./components/headers/navigation/Categories";
import Likes from "./components/headers/navigation/Likes";
import { Routes,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header/>
      <SecondHeader/>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="likes" element={<Likes/>}/>
      </Routes>
    </div>
  );
}

export default App;
