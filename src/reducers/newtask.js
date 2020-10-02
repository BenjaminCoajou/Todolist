import {INPUT_CHANGE, SUBMIT_TASK} from '../actions/newtask';

const initialState = {
    task: {
        content: '',
        status: '1',
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
        case SUBMIT_TASK:
        return {
          ...state,
          task: {
            content:'',
          }
        };
      default:
        return state;
    }
  };
  
  export default newtask;