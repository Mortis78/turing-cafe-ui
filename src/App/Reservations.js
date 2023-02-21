import React, { Fragment } from 'react'
import Card from './Card.js'
import App from './App'
import './Reservations.css'

const Reservations = ({reservations, cancelReservation}) => {
    const allReservations = reservations.map(reservation => {
        return (
            <Card
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                id={reservation.id}
                key={reservation.id}
                cancel={cancelReservation}
            />
        )
    })
    return(
        <div className='reservation-container'>
            {allReservations}
        </div>
    )
}
export default Reservations             