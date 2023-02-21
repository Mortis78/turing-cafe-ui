import React, { Fragment } from 'react'
import Card from './Card.js'
import './Reservations.css'

const Reservations = ({reservations, cancelReservation}) => {
    const allReservations = reservations.map(reservation => {
        return (
            <Card
                name={reservation.name}
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