import React, { useEffect, useState } from 'react'
import "./Home.css"
import CardsList from "../../componentes/CardsList/CardsList"
import axios from 'axios'
import {HOST_API} from "../../constants.js"
import {useDispatch} from "react-redux" 
import {SET_PEOPLE_DATA} from "../../Redux/Actions/action" 
import CircularProgress from '@mui/material/CircularProgress'



const Home = () => {
   const dispatch = useDispatch()
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(true)
   const getPersonFromApi = () => {
    let promesaAxios = axios.get(HOST_API+"/api/people")

    promesaAxios.then((response) => {

      if (response.data.results) {

        dispatch({type:SET_PEOPLE_DATA, payload: response.data.results}) 
        setLoading(false)
      }else {
        
        setError(true)
        
      }
    
    }).catch(error => {
        setError(true);
        setLoading(false)
    }  
    )
   }

    useEffect(() => {
      getPersonFromApi()
    });
    return (

        <div>
            <div style={{ padding:"20px"}}>
            {loading ?
                <CircularProgress/>
                :
                (error ?
                    <p>error! something went wrong ;(</p>
                    : 
                    <div >
                        
                        <CardsList />
                    </div>
                )
            }
                
            </div>
        </div>
    )
}
export default Home;