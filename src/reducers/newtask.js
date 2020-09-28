import {SUBMIT_TASK, INPUT_CHANGE} from '../actions/newtask';

const initialState = {
    task: {
        content: '',
        status: '',
    }
};

const newtask = (state = initialState, action = {}) => {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          task: {
              ...state.task,
              ...action.payload,
          }
        };
      default:
        return state;
    }
  };
  
  export default newtask;