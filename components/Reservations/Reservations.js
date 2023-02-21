import React from 'react'
import './components/Card/Card.js'
import './components/Reservations/Reservations.css'

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
