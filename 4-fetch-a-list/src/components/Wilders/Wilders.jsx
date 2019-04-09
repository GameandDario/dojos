import React, { Component } from 'react';
import { wildersApiUrl } from '../../utils/url';
import './Wilders.scss';
import Wilder from './Wilder';
export default class Wilders extends Component {
  constructor (props){
      super(props);
      this.state = {
      wilders:[]
      }      
    }
    fetchWilders(){
      fetch(wildersApiUrl)
      .then (response => response.json())
      .then (response => { 
      this.setState ({wilders: response.users})
      })
      .catch (error => console.log(error))
    }
  render() {
    return (
      <div>
        <p>You are in the wilder component</p>
        <button onClick= {()=> this.fetchWilders()}>ClickMe
        </button>
          { this.state.wilders.filter(wilder => wilder.promotion_id===2).map((wilder)=>{
           return <Wilder key={wilder.id} email={wilder.email} firstname={wilder.firstname} />

          })


        }
      </div>
    );
  }
}
