import { Link } from 'react-router-dom';
import { useNews } from '../../API/APImenedjer';

import './headerStyls.scss'

function Header(){
  const {inputStatus, setInputStatus, setSecondHeader} = useNews()
  const handleChange = (e) => {
    setInputStatus(e.target.value); 
  };
  return (
    <header className="headerss">
      <Link to = "/">
        <div className="logo" onClick={() => setSecondHeader('Новости')}>
            <img src="img/logo.svg" onClick={() => setSecondHeader('Новости')} alt="logo"/>
        </div>
      </Link>
      <div className="inputClass" >
        <input type="text" value={inputStatus} onChange={handleChange} placeholder="Поиск" />
        <div className="daughterInput"><img src="img/magnifying glass.svg" alt="Magnifying-glass"/></div>
      </div>
      <div className="buttonsMat">
          <Link to = "/categories">
            <nav className="buttons" onClick={() => setSecondHeader('Категории')}>
              <img src="img/cubes.svg" alt="Categories"/><p>Категории</p>
            </nav>
          </Link>
          
          <Link to = "likes">
            <nav className="buttons" onClick={() => setSecondHeader('Избранные')} >
              <img src="img/heart.svg" alt="Favorites"/><p>Избранные</p>
            </nav>
          </Link>
      </div>
    </header>
  )
}
export default Header;
