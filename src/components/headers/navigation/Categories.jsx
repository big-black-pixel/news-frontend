import React from 'react'
import './categories.scss'
import { Link } from 'react-router-dom';
import { useNews } from '../../../API/APImenedjer';

function Categories() {
  const {setSecondHeader} = useNews()
  return (
    <div className='categories'>
      <ul className='galvca'>

        <Link to = "/">
          <li onClick={() => setSecondHeader('технологии',false)}>
            <h3>технологии</h3>
            <img src="/img/technologies.png" alt="технологии" />
          </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('бизнес',false)}>
            <h3>бизнес</h3>
            <img src="/img/business.png" alt="бизнес" />
          </li>
        </Link>
        
        <Link to = "/">
          <li onClick={() => setSecondHeader('спорт',false)}>
            <h3>спорт</h3>
            <img src="/img/sport.png" alt="спорт" />
        </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('наука',false)}>
            <h3>наука</h3>
            <img src="/img/science.png" alt="наука" />
        </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('здоровье',false)}>
            <h3>здоровье</h3>
            <img src="/img/health.png" alt="здоровье" />
          </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('развлечения',false)}>
            <h3>развлечения</h3>
            <img src="/img/entertainment.png" alt="развлечения" />
          </li>
        </Link>
      </ul>

      <ul className='kategor'>
      <Link to = "/">
          <li onClick={() => setSecondHeader('технологии',false)}> <p>технологии</p> </li>
        </Link>

        <Link to = "/">
          <li onClick={() => setSecondHeader('бизнес',false)}> <p>бизнес</p> </li>
        </Link>
        
        <Link to = "/">
          <li onClick={() => setSecondHeader('спорт',false)}> <p>спорт</p> </li>
        </Link>

        <Link to = "/">
          <li onClick={() => setSecondHeader('наука',false)}> <p>наука</p> </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('здоровье',false)}> <p>здоровье</p> </li>
        </Link>
        <Link to = "/">
          <li onClick={() => setSecondHeader('развлечения',false)}> <p>развлечения</p> </li>
        </Link>
      </ul>
    </div>
  )
}
export default Categories;