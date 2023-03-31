import { useState } from 'react';
import {v4 as uuid} from "uuid";
import axios from 'axios';

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true);
    const flip = () => setIsFlipped(!isFlipped);
    return [isFlipped, flip];
}

const useAxios = (baseUrl) => {
    const [state, setState] = useState([]);
    const fetchData = async (endpoint) => {
        try {
            const response = await axios.get(baseUrl + endpoint);
            setState(s => [...s, {...response.data, id: uuid()}]);
        } catch (e) {
            console.log(e);
        }
    }

    return [state, fetchData ];
    
}

export { useFlip, useAxios };