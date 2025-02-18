import { useState } from "react";
import { useContacts } from "../context/ContactContext";

const AddContact = ({ onClose }) => {
    const { addContact } = useContacts();
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        onClose();
    };

    return (
        <div className="form-container">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        value={contact.name}
                        onChange={(e) =>
                            setContact({ ...contact, name: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={contact.phone}
                        onChange={(e) =>
                            setContact({ ...contact, phone: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={(e) =>
                            setContact({ ...contact, email: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn-primary">
                        Add Contact
                    </button>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
