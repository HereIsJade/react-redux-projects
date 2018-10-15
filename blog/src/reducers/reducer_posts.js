import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions"

export default function (state={}, action) {
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = {...state}
      // console.log('oldstate: ',newState)
      // newState[post.id] = post
      // console.log('newstate: ',newState)
      // return newState
      // console.log('state from reducer:', {...state,'k':'ll'})
      return {...state, [action.payload.data.id]: action.payload.data}
      // return {[action.payload.data.id]: action.payload.data}
    case DELETE_POST:
      return _.omit(state, action.payload)
    default:
      return state
  }
}