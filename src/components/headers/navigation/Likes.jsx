import React from 'react'
import './likesStyls.scss'
import data from '../../../API/data.json'

function Likes() {
  return (
    <div className='like'>
      <section>
        {data.articles.map((articles, index) => {
          return (
            <article key={index} >
              <ul>
                <li><h3>{articles.source?.name}</h3></li>
                <li>
                  <p>{articles.title}</p>
                </li>
                <li>
                  <a href={articles.url} target="blank" rel="ferrer">
                    <button>Подробнее</button>
                  </a>
                  <img src="img/liks-acktiv.svg" alt="liks" />
                </li>
              </ul>
            </article>
          )
        })}
      </section>
    </div>
  )
}
export default Likes;