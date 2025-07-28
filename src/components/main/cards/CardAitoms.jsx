import { useEffect } from 'react';
import { useNews } from '../../../API/APImenedjer';
import { useInputStatus } from '../../../hooks/DefaulHooks'; 

import './cardAitomsStyls.scss'

function CardAitoms() {

    const { newsMas, loading, errorStatus, setNewsMas } = useNews();
    const {inputStatus} = useInputStatus()
    const filteredNews = newsMas.filter(filt => {
        return filt.articles.source.name.toLowerCase().includes(inputStatus.toLowerCase())
    })

    useEffect(() => { setNewsMas() }, [...Array(9)])
    if (loading) { console.log(loading) }
    if (errorStatus) { return errorStatus }
    
    
    return (
        <section>
            {filteredNews.map((articles, index) => {
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