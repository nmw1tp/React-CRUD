import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContact = { name, email, phone };
        await axios.post('/api/contacts', newContact);
    };

    return (
        <div>
            <h2>Create Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
