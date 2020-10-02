import {SUBMIT_TASK} from '../actions/newtask';

const initialState = {
    todotask: [
      {
        content: '',
        status: '',
    }
  ]
};

const todo = (state = initialState, action = {}) => {
    switch (action.type) {
      case SUBMIT_TASK:
        return {
          ...state,
          todotask: [
              ...state.todotask,
              {...action.payload,
          }]
        };
      default:
        return state;
    }
  };
  
  export default todo;