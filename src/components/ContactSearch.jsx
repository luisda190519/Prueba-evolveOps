import { useState } from "react";
import { useContacts } from "../context/ContactContext";
import ContactCard from "./ContactCard";

const ContactSearch = ({ onEdit }) => {
    const [query, setQuery] = useState("");
    const { searchContacts } = useContacts();
    const results = searchContacts(query);

    return (
        <div className="search-container">
            <h2>Buscar contactos</h2>
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Buscar por nombre o email"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            {query && (
                <div className="search-results">
                    {results.length === 0 ? (
                        <p className="no-results">No se encontro</p>
                    ) : (
                        <div className="contacts-grid">
                            {results.map((contact) => (
                                <div
                                    key={contact.id}
                                    className="contact-card-wrapper"
                                >
                                    <ContactCard
                                        contact={contact}
                                        onEdit={onEdit}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ContactSearch;
