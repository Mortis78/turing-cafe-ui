import React from 'react'
import '../Card/Card.js'
import './Reservations/Reservations.css'

function  Reservations({reservations, cancelReservation}){
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
        {allReservations}
    )
}
export default Reservations             