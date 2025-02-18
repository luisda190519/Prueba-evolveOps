import { useContacts } from '../context/ContactContext';
import ContactCard from './ContactCard';

const ContactList = ({ onEdit }) => {
  const { contacts } = useContacts();

  const sortedContacts = [...contacts].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div className="contacts-container">
      <h2>Todos los Contactos</h2>
      {contacts.length === 0 ? (
        <p className="no-contacts">No contacts found</p>
      ) : (
        <div className="contacts-grid">
          {sortedContacts.map(contact => (
            <div key={contact.id} className="contact-card-wrapper">
              <ContactCard contact={contact} onEdit={onEdit} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;