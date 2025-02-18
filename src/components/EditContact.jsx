import { useState, useEffect } from 'react';
import { useContacts } from '../context/ContactContext';

const EditContact = ({ contact, onClose }) => {
  const { updateContact } = useContacts();
  const [editedContact, setEditedContact] = useState(contact);

  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(editedContact);
    onClose();
  };

  return (
    <div className="form-container">
      <h2>Editar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={editedContact.name}
            onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone"
            value={editedContact.phone}
            onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={editedContact.email}
            onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-primary">Save Changes</button>
          <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;