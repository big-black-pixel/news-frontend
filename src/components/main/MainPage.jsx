import { useNews } from '../../API/APImenedjer.js';
import CardAitoms from './cards/CardAitoms.jsx';

import './mainPageStyls.scss'

function MainPage(){
  const {newsPopuliriti} = useNews()
    return (
      <main>
        { newsPopuliriti ? <h2 className='title'><span>популярные &nbsp;</span> новости</h2> : '' }
        
        <CardAitoms/>

      </main>
    )
  }
  export default MainPage;