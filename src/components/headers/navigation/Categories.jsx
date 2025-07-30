import React from 'react'
import './categories.scss'

function Categories() {
  return (
    <div className='categories'>
      <ul>
        <li>
          <h3>технологии</h3>
          <img src="/img/technologies.png" alt="технологии" />
        </li>
        <li>

        <h3>бизнес</h3>
          <img src="/img/business.png" alt="бизнес" />
        </li>

        <li>
        <h3>спорт</h3>
          <img src="/img/sport.png" alt="спорт" />
        </li>

        <li>
        <h3>наука</h3>
          <img src="/img/science.png" alt="наука" />
        </li>

        <li>
        <h3>здоровье</h3>
          <img src="/img/health.png" alt="здоровье" />
        </li>

        <li>
        <h3>Развлечения</h3>
          <img src="/img/entertainment.png" alt="Развлечения" />
        </li>
      </ul>
    </div>
  )
}
export default Categories;