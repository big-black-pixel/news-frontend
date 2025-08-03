import { Link } from 'react-router-dom';
import { useNews } from '../../API/APImenedjer';
import { useStatus } from '../../API/ActivStatus';

import './headerStyls.scss'

function Header() {
  const { inputStatus, setInputStatus, setSecondHeader, statusSecondHeader } = useNews()
  const handleChange = (e) => { setInputStatus(e.target.value); };
  const { navigatoring, setNavigating, inputAcktiv, setInputAcktiv, } = useStatus()
  const katigories = () =>{setSecondHeader('Категории') ; setNavigating(false)}
  const izbran = () =>{setSecondHeader('Избранные') ; setNavigating(false)}
  return (
    <header className="headerss">
      <Link to="/">
        <div className="logo">
          <img src="img/logo.svg" onClick={() => setSecondHeader('Новости', true)} alt="logo" />
        </div>
      </Link>


      <div className="inputClass carr" >
        <input className={(inputAcktiv ? 'hswlinput ' : 'disepNone')} type="text" value={inputStatus} onChange={handleChange} placeholder="Поиск" />
        <div className='daughterInput'>
          <img src="img/magnifying glass.svg" alt="Magnifying-glass" /></div>
      </div>


      <div className='perexod'>

        <div className="inputClass" >
          <input className={(inputAcktiv ? 'hswlinput ' : 'disepNone')} type="text" value={inputStatus} onChange={handleChange} placeholder="Поиск" />
          <div className={(inputAcktiv ? 'daughterInput' : 'daughterInput2 ')}
            onClick={() => setInputAcktiv(inputAcktiv ? false : true)}>
            <img src="img/magnifying glass.svg" alt="Magnifying-glass" /></div>
        </div>

        <img className='navig' src='img/navigation.svg' alt='nawigation' onClick={() => setNavigating(true)} />
        <div className={(navigatoring === false ? "nayt" : "vlojit")} >
          <img className='exsis' src="img/exet.svg" alt="exsis" onClick={() => setNavigating(false)} />
          <Link to="/categories">
            <nav className={(statusSecondHeader === 'Категории' ? "buttons navColor" : "buttons")} onClick={() => katigories()}>
              <p>Категории</p>
            </nav>
          </Link>

          <Link to="likes">
            <nav className={(statusSecondHeader === 'Избранные' ? "buttons navColor" : "buttons")} onClick={() => izbran()} >
              <p>Избранные</p>
            </nav>
          </Link>
        </div>

      </div>


      <div className="buttonsMat">
        <Link to="/categories">
          <nav className={(statusSecondHeader === 'Категории' ? "buttons navColor" : "buttons")} onClick={() => setSecondHeader('Категории')}>
            <img src="img/cubes.svg" alt="Categories" /><p>Категории</p>
          </nav>
        </Link>
           
        <Link to="likes">
          <nav className={(statusSecondHeader === 'Избранные' ? "buttons navColor" : "buttons")} onClick={() => setSecondHeader('Избранные')} >
            <img src="img/heart.svg" alt="Favorites" /><p>Избранные</p>
          </nav>
        </Link>
      </div>
    </header>
  )
}
export default Header;
