import { connect } from 'react-redux';

import Newtask from '../components/Newtask';

import {inputChange, submitTask} from '../actions/newtask';

const mapStateToProps = (state) => ({
    content: state.newtask.task.content,
});

const mapDispatchToProps = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(inputChange(payload));
    },
    handleSubmit: () => {
        dispatch(submitTask());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Newtask);