import { useState, useEffect} from "react"
import uuid from "uuid";
import axios from 'axios'


export const useCard = (initial) => {

    const [state, setState] = useState(initial)
    function flipCard(){
        setState(state => !state);
    }
    return [ state , flipCard ]
}



export const  useAxios = (url) => {

    const [response, setResponse]= useState([])

    async function makeReq(x=null){
        const search = x?`${url}${x}`: url;
        const res = await axios.get(search)
        setResponse(cards => [...cards, { ...res.data, id: uuid() }])
    }
    return [response, makeReq ]
    
}

// export const  useAxios = (url) => {

//     const [response, setResponse]= useState([])

//     async function makeReq(name){
//         const res = await axios.get(url)
//         setResponse(cards => [...cards, { ...res.data, id: uuid() }])
//     }
//     return [response, makeReq ]
// }
