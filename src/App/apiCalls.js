function getData(info) {
    return fetch(`http://localhost:3001/api/v1/reservations${info}`)
    .then()
  }
  
  export default getData 