import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/contacts/${id}`);
            setName(result.data.name);
            setEmail(result.data.email);
            setPhone(result.data.phone);
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedContact = { name, email, phone };
        await axios.put(`/api/contacts/${id}`, updatedContact);
    };

    return (
        <div>
            <h2>Update Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
