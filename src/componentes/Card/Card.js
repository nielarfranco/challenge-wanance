import * as React from 'react'
import CardMaterial from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import {useDispatch} from "react-redux" 
import {DELETE_PEOPLE_DATA} from "../../Redux/Actions/action" 

const Card = (prop) => {
    const dispatch = useDispatch()
    let person = prop.person
    
  
    return (
        <CardMaterial sx={{ maxWidth: 345 }} style={{  margin: "2%", boxShadow: "0px 2px 6px 3px #00000040"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Height: {prop.person.height}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Gender: {prop.person.gender}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" onClick={ e => dispatch({type:DELETE_PEOPLE_DATA, payload: prop.i}) }>
            DELETE
          </Button>
        </CardActions>
      </CardMaterial>
    )
}

export default Card;