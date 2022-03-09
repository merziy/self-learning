
  // State object that holds data
 

  // Method is executed when component is mounted

  function JsonAPI() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((data) => {
      this.setState({ json: data })
      console.log(this.state.json)
    })
    // catch errors
    .catch(console.log)
}

export default JsonAPI;
