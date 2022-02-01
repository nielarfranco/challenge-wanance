import { useState } from "react"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import SearchForm from "../../componentes/SearchForm/SearchForm"


const CardsList = () => {
    const people = useSelector(state => state.reducer.peopleData);
    const [filter, setFilter] = useState("")

    const listItems = people.filter(person => person.name.includes(filter)).map((person, i) => {
        return (
            <Card key={person.name} person={person} i={i} />
        )
    })
    return (
        <div >
            <SearchForm setFilter={setFilter}/>
            {listItems}
            {listItems.length === 0 && <p>No results</p>}

            
        </div>
    )
}

export default CardsList;