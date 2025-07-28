import { useState } from "react"

export const useInputStatus = () => {
    const [inputStatus, setInputStatus] = useState('')
    const changeInputStatus = (event) => { setInputStatus(event.target.value) }
    return { inputStatus, changeInputStatus }
}