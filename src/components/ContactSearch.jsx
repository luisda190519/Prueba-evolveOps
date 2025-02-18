import { useState } from "react";
import { useContacts } from "../context/ContactContext";

const ContactSearch = () => {
    const [query, setQuery] = useState("");
    const { searchContacts } = useContacts();
    const results = searchContacts(query);

    return (
        <div className="contact-search">
            <h2>Buscar Contactos</h2>
            <input
                type="text"
                placeholder="Buscar por nombre o por email"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
                <div className="search-results">
                    {results.map((contact) => (
                        <div key={contact.id} className="search-result">
                            <p>
                                <strong>{contact.name}</strong>
                            </p>
                            <p>Telefono: {contact.phone}</p>
                            <p>Email: {contact.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContactSearch;
