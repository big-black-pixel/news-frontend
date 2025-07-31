import { useEffect } from 'react';
import { useNews } from '../../../API/APImenedjer';

import './cardAitomsStyls.scss'

function CardAitoms() {
    const { newsMas, errorStatus, setNewsMas ,inputStatus} = useNews();

    const filteredNews = newsMas.filter(filt => {
        return filt.source?.name?.toLowerCase().includes(inputStatus.toLowerCase())
    })

    useEffect(() => { setNewsMas() }, [])
    if (errorStatus) { return errorStatus }

    const dataToRender = filteredNews.length > 0 ? filteredNews : newsMas || [];
    
    return (
        <section>
            {dataToRender.map((articles) => {
                    return (
                        <article key={articles.title.toLowerCase()} >
                            <ul>
                                <li><h3>{articles.source?.name}</h3></li>
                                <li>
                                    <p>{articles.title}</p>
                                </li>
                                <li>
                                    <a href={articles.url} target="blank" rel="ferrer">
                                        <button>Подробнее</button>
                                    </a>
                                    <img src="img/liks.svg" alt="liks" />
                                </li>
                            </ul>
                        </article>
                    )
                })}
        </section>
    )
}
export default CardAitoms;