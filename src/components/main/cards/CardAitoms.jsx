import { useEffect } from 'react';
import { useNews } from '../../../API/APImenedjer';

import './cardAitomsStyls.scss'

function CardAitoms() {
    const { newsMas, errorStatus, setNewsMas ,inputStatus} = useNews();
    console.log(inputStatus)

    const filteredNews = newsMas.filter(filt => {
        return filt.source?.name?.toLowerCase().includes(inputStatus.toLowerCase())
    })

    useEffect(() => { setNewsMas() }, [])
    if (errorStatus) { return errorStatus }

    const dataToRender = filteredNews.length > 0 ? filteredNews : newsMas || [];
    
    return (
        <section>
            {dataToRender.map((articles, index) => {
                    return (
                        <article key={index} >
                            <ul>
                                <li><h3>{articles.source?.name}</h3></li>
                                <li>
                                    <p>{articles.title}</p>
                                </li>
                                <li>
                                    <button>подробнее</button>
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