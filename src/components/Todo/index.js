import React from 'react';


const Todo = ({ todo }) => {
    return (
        <div className="contain todo">
            {todo ? todo.map((todotask) => (
                <div key={todotask.content} className="task">
                    <p>{todotask.content}</p>
                    <div>
                        <button>Fait</button>
                        <button>Modifer</button>
                        <button>Supprimer</button>
                    </div>
                </div>)) : ''}
        </div>

    );
}

export default Todo;