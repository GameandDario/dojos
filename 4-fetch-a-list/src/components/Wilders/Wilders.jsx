import React, { Component } from 'react';
import { wildersApiUrl } from '../../utils/url';
import './Wilders.scss';
import Wilder from './Wilder';
export default class Wilders extends Component {
  constructor(props){
    super(props)
    this.state= {
      wilders: []
    }
  }
  fetchWilders(){
    fetch(wildersApiUrl)
    .then(res => res.json())
    .then(res => {
      this.setState({wilders:res.users})
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.fetchWilders()}>Wilders click me!</button>
        {
          this.state.wilders.filter(w => w.promotion_id === 2).map((wilder)=>{
            return <Wilder key={wilder.id} email={wilder.email} firstname={wilder.firstname} />
          })
        }
      </div>
    );
  }
}
