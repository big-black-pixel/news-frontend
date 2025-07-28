import { useInputStatus } from '../../hooks/DefaulHooks'; 

import './headerStyls.scss'

function Header(){
  const {inputStatus, changeInputStatus} = useInputStatus()
  
  return (
    <header className="headerss">
      <div className="logo">
          <img src="img/logo.svg" alt="logo"/>
      </div>
      <div className="inputClass" >
        <input type="text" value={inputStatus} onChange={changeInputStatus} placeholder="Поиск" />
        <div className="daughterInput"><img src="img/magnifying glass.svg" alt="Magnifying-glass"/></div>
      </div>
      <div className="buttonsMat">
          <nav className="buttons"><img src="img/cubes.svg" alt="Categories"/><p>Категории</p></nav>
          <nav className="buttons"><img src="img/heart.svg" alt="Favorites"/><p>Избранные</p></nav>
      </div>
    </header>
  )
}
export default Header;
