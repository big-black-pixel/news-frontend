import { useEffect } from 'react';
import { useNews } from '../../../API/APImenedjer';

import './cardAitomsStyls.scss'

function CardAitoms() {
    const { newsMas, errorStatus, setNewsMas, inputStatus, addToFavorites, favorites} = useNews();

    const filteredNews = newsMas.filter(filt => {
        const searchTerm = inputStatus.toLowerCase();
        return (
          filt.title?.toLowerCase().includes(searchTerm) ||
          filt.source?.name?.toLowerCase().includes(searchTerm)
        );
      });

    useEffect(() => { setNewsMas() }, [])
    if (errorStatus) { return errorStatus }

    const dataToRender = filteredNews.length > 0 ? filteredNews : newsMas || [];
    const handleAddFavorite = (articles) => {
        
        addToFavorites({
            title: articles.title,
            source: articles.source,
            url: articles.url,
            publishedAt: articles.publishedAt,
        });
    };
    const isFavorite = (article) => {
        return favorites.some(fav => 
            fav.url === article.url
        );
    };
    
    return (
        <section>
            {dataToRender.map((articles) => {
                const favorite = isFavorite(articles);
                    return (
                        <article key={articles.url} >
                            <ul>
                                <li><h3>{articles.source?.name}</h3></li>
                                <li>
                                    <p>{articles.title}</p>
                                </li>
                                <li>
                                    <a href={articles.url} target="blank" rel="ferrer">
                                        <button>Подробнее</button>
                                    </a>
                                    <img src={(favorite ? "img/liks-acktiv.svg" : "img/liks.svg")} 
                                    onClick={() => handleAddFavorite(articles)} alt="liks" />
                                </li>
                            </ul>
                        </article>
                    )
                })}
        </section>
    )
}
export default CardAitoms;