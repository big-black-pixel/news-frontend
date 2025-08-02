import './likesStyls.scss'
import { useNews } from '../../../API/APImenedjer';
import { useEffect } from 'react';


function Likes() {
  const { favorites, deleteToFavorites, getToFavorites } = useNews()
  const handleAddFavorite = (articles) => {

    deleteToFavorites(articles.id);
  };

  useEffect(()=>{
    getToFavorites()
  },[])
 
  return (
    <div className='like'>
      <section>
        {favorites !== undefined || null ? 
        (favorites.map((articles) => {
          return (
            <article key={articles.id} >
              <ul>
                <li><h3>{articles.source?.name}</h3></li>
                <li>
                  <p>{articles.title}</p>
                </li>
                <li>
                  <a href={articles.url} target="blank" rel="ferrer">
                    <button>Подробнее</button>
                  </a>
                  <img src="img/liks-acktiv.svg" onClick={() => handleAddFavorite(articles)} alt="liks" />
                </li>
              </ul>
            </article>
          )
        })) : ''}
      </section>
    </div>
  )
}
export default Likes;