import React, { Component } from 'react';
import Reservations from './Reservations'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations:[
        {
        id: 1,
        name: "Christie",
        date: "12/29",
        time: "7:00",
        number: 12
        }
      ]
    }
  }

  // cancelReservation = (id) => {
  //   const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
  //   this.setState({reservation: filteredReservations })
  // }
  

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          < Reservations reservations={this.state.reservations} />
        </div>
      </main>
    )
  }
}

export default App;
