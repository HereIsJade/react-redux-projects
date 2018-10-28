import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Nav extends Component{
  render(){
    return (
      <ul className='nav'>
        <li>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
        </li>
      </ul>
    )
  }
}