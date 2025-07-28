import CardAitoms from './cards/CardAitoms.jsx';

import './mainPageStyls.scss'

function MainPage(){
    return (
      <main>
        <h2 className='title'><span>популярные &nbsp;</span> новости</h2>
        <CardAitoms/>
      </main>
    )
  }
  export default MainPage;