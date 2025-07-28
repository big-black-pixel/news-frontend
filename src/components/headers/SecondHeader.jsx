import { useNews } from '../../API/APImenedjer';

import './secondHeaderStyles.scss'

function SecondHeader(){
    const {inputStatus} = useNews()
    return(
       <h1 className="newsHeadline">{inputStatus.length === 0 ? 'Новости' : `Поиск : ${inputStatus}`}</h1>
    )
}
export default SecondHeader;