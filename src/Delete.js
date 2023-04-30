import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
    const [id, setId] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`/api/contacts/${id}`);
    };

    return (
        <div>
            <h2>Delete Contact</h2>
            <form onSubmit={handleDelete}>
                <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Delete;
