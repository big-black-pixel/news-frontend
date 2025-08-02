import { useEffect } from 'react';
import { useNews } from '../../../API/APImenedjer';

import './cardAitomsStyls.scss'

function CardAitoms() {
    const { newsMas, errorStatus, setNewsMas ,inputStatus, addToFavorites} = useNews();

    const filteredNews = newsMas.filter(filt => {
        return filt.source?.name?.toLowerCase().includes(inputStatus.toLowerCase())
    })

    useEffect(() => { setNewsMas() }, [])
    if (errorStatus) { return errorStatus }

    const dataToRender = filteredNews.length > 0 ? filteredNews : newsMas || [];
    const handleAddFavorite = (articles) => {
        // Отправляем весь объект статьи, а не только title
        addToFavorites({
            title: articles.title,
            source: articles.source,
            url: articles.url,
            publishedAt: articles.publishedAt,
        });
    };
    
    return (
        <section>
            {dataToRender.map((articles) => {
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
                                    <img src="img/liks.svg" onClick={() => handleAddFavorite(articles)} alt="liks" />
                                </li>
                            </ul>
                        </article>
                    )
                })}
        </section>
    )
}
export default CardAitoms;