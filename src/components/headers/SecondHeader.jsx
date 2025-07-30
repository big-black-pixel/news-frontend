import { useNews } from '../../API/APImenedjer';

import './secondHeaderStyles.scss'

function SecondHeader(){
    const {inputStatus,statusSecondHeader} = useNews()
    
    return(
       <h1 className="newsHeadline">{inputStatus.length === 0 ? statusSecondHeader : `Поиск : ${inputStatus}`}</h1>
    )
}
export default SecondHeader;