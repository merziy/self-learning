import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        items: [],
        DataIsLoaded: false
      };
    }

    componentDidMount() {
      fetch(
        "https://api.hatchways.io/assessment/students")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json.students,
            DataIsLoaded: true
          });
        })
    }

    render() {
      const { DataIsLoaded, items } = this.state;
      if (!DataIsLoaded) return <div>
        <h1>Please wait...</h1>
      </div> ;

      return (
        <div className = "App">
          <h1>Hatchways.io Fetch API assigment</h1> {
            items.map((item) => (
              <ol key = { item.id } >
                <img src={item.pic} alt="profile pic"></img><br/>
                <div className="container">
                  <h2>{ item.firstName + ' ' + item.lastName }</h2><br/>
                  <div className="student-info">
                    Email: { item.email }<br/>
                    Company: { item.company }<br/>
                    Skill: { item.skill }<br/>
                    Average: {item.grades.reduce((a, b) => a + parseInt(b), 0) / item.grades.length}<br/>
                  </div>
                </div>
              </ol>
            ))  
          }
        </div>
      );
    }
}

export default App;
