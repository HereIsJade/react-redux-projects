import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const PlayerPreview = (props) => {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
        Reset
      </button>
    </div>
  )
}

export class Battle extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }
  }

  handleSubmit = (id, username) => {
    this.setState(() => {
        const newState = {}
        newState[id + 'Name'] = username
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
        return newState
      }
    )
  }

  handleReset = (id) => {
    this.setState(() => {
      const newState = {}
      newState[id + 'Name'] = ''
      newState[id + 'Image'] = null
      return newState
    })
  }

  render(){
    let playerOneName = this.state.playerOneName
    let playerTwoName = this.state.playerTwoName
    let playerOneImage = this.state.playerOneImage
    let playerTwoImage = this.state.playerTwoImage

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />
          }
          {playerOneImage !== null &&
          <PlayerPreview
            username={this.state.playerOneName}
            avatar={this.state.playerOneImage}
            id='playerOne'
            onReset={this.handleReset.bind}
          />
          }

          {!playerTwoName &&
          <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}
          />
          }
          {playerTwoImage !== null &&
          <PlayerPreview
            username={this.state.playerTwoName}
            avatar={this.state.playerTwoImage}
            id='playerTwo'
            onReset={this.handleReset}
          />
          }
        </div>
        {playerOneImage && playerTwoImage &&
        <div className='row'>
          <Link
            to={{
              pathname: this.props.match.url + '/results',
              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
            }}
            className='button'
          >Battle</Link>
        </div>
        }
      </div>
    )
  }
}

class PlayerInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.id, this.state.username)
  }

  handleInputChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className='column'>
        <label htmlFor='username' className='header'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <button type='submit' className='button' disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}