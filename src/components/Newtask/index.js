import React from 'react';


const Newtask = () => (
    <div className="newtask">
        <form>
            <input type="text" name="newtask" placeholder="Nouvelle tâche"></input>
            <button>Ajouter</button>
        </form>
    </div>
);

export default Newtask;