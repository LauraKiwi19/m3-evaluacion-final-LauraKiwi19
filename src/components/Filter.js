import React from "react"
import "../styles/_filter.scss"


const Filter = (props) => {
    return (
        <div>
            <label>Episodes</label>
            <select onChange={props.handleEpisodes}>
                <option value="más de 1">más de 1</option>
                <option value="más de 3">más de 3</option>
                <option value="más de 10">más de 10</option>
            </select>
            <label>Status</label>
            <select onChange={props.handleStatus}>
                <option value="">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
            </select>
            <label htmlFor="gender">All
                <input
                    id="gender"
                    type="radio"
                    value=""
                    name="gender" onChange={props.handleGender} />
            </label>
            <label htmlFor="gender">Male
                <input
                    id="gender"
                    type="radio"
                    value="Male"
                    name="gender" onChange={props.handleGender} />
            </label>
            <label htmlFor="gender">Female
                <input
                    id="gender"
                    type="radio"
                    value="Female"
                    name="gender" onChange={props.handleGender} />
            </label>
            <input className="filter-input" placeholder="¿Qué localización buscas?" type="text" onChange={props.handleLocation} />
            <input className="filter-input" placeholder="¿Qué personaje estás buscando?" type="text" onChange={props.handleInputFilter} />
        </div>
    )
}


export default Filter;