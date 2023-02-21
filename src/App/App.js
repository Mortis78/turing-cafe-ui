
import React, { Component } from 'react';
import Reservations from './Reservations'
import getData from './apiCalls';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      reservations:[]
    }
  }

  cancelReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({reservation: filteredReservations })
  }

  componentDidMount () {
    getData('reservations')
      .then((data) => this.setState({ reservations: data.reservations }))
      .catch((error) => console.log(error))
          
  }
  

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
