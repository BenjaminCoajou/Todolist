import React from 'react';


const Newtask = ({content, inputChange, handleSubmit}) => (
    <div className="newtask">
        <form onSubmit={(evt) => { evt.preventDefault(); handleSubmit() }}>
            <input type="text" name="content" placeholder="Nouvelle tâche" value={content}
            onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}}></input>
            <button onClick={(evt) => { evt.preventDefault(); handleSubmit() }}>Ajouter</button>
        </form>
    </div>
);

export default Newtask;