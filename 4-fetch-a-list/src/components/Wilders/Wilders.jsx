import React, { Component } from 'react';
import { wildersApiUrl } from '../../utils/url';
import './Wilders.scss';
import Wilder from './Wilder';
export default class Wilders extends Component {
constructor(props){
  super(props);
  this.state = {
    wilders:[]
  }
}
fetchWilders(){
fetch(wildersApiUrl)
.then(resp => resp.json()) 
.then(response => {
  const wilders = response.users.filter(wilder => wilder.promotion_id === 2)
  this.setState({wilders})
  console.log('end of api call')
})
.catch(error => console.log(error))
console.log('after fetch')
}
  
  render() {
    return (
      <div>
        <p>You are in the wilder component</p>
        <button onClick={() => this.fetchWilders()}>get wilder</button>
        {
          this.state.wilders.map((wilder) => {
            return <Wilder name={wilder.firstname} mail={wilder.email} key={wilder.id} />
            
          })
        }
      </div>
    );
  }
}
