import React, { Component } from 'react';
import './App.css';
import emails from './utils/users';

const emailsList = emails(50);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: []
    }
  }
  handleClick() {
    // Si les states ont un array faire un spread operator pour les mettre à jour.
    this.setState({ emails: [...emailsList]})
  }
  handleDelete(idx) {
    let emails = this.state.emails
    emails.splice(idx,1)
    this.setState({emails: [...emails]})
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Welcome in users list</h1>
        <button onClick={() => this.handleClick()}>Afficher</button>
        <ul>
          
            {
              this.state.emails.map((email, idx)=>{
                return <li key={idx}>{email}<button onClick={() => this.handleDelete(idx)}>Supprimer</button></li>
              })
            }
          

        </ul>
      </div>
    );
  }
}

export default App;
