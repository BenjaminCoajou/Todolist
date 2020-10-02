import { connect } from 'react-redux';

import Todo from '../components/Todo';

const mapStateToProps = (state) => ({
    todo: state.todo.todotask,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);