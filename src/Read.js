import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Read = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/contacts');
            setContacts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Contact List</h2>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <h3>{contact.name}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default Read;
