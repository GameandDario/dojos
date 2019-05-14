import React, { Component } from 'react';
import { wildersApiUrl } from '../../utils/url';
import './Wilders.scss';
import Wilder from './Wilder';



export default class Wilders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wilders: []

    }
  }
  fetchWilders() {
    fetch(wildersApiUrl)
      .then(response => response.json())
      .then(response => {
        const wilders = response.users.filter(user => user.promotion_id === 2) 
        this.setState({wilders})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button onClick={() => this.fetchWilders()}>COUCOU</button>
        {
          this.state.wilders.map((wilder, idx )=> {
          return  <Wilder key={idx} name={wilder.firstname}  mail={wilder.email}/>
          })
        }
      </div>
    );
  }
}
