import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const SearchForm = (prop) => {
  const [textFilter, setTextFilter] = useState("")
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            size="small"
            onChange={e => { setTextFilter(e.target.value) }}
          />
        </Grid>
        <Grid item >
          <Button 
             variant="contained" 
             onClick={e => { prop.setFilter(textFilter) }}
          >Search</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchForm;