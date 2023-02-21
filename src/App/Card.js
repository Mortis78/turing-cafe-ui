import React,{ Fragment} from 'react'
import './card.css'

const Card = ({id, name, date, time, number }) => {
    return(
        <div className='Card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>`Number of guests: ${number}`</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card