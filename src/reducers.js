
import initialState from './data.json'

const tableReducer = (state=initialState, action) =>{
  switch(action.type){
    case 'delete': return state.filter(item => (action.id !== item.id))
    default: return state
  }
}

export default tableReducer