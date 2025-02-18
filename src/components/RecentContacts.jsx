import { useContacts } from '../context/ContactContext';
import ContactCard from './ContactCard';

const RecentContacts = ({ onEdit }) => {
  const { getRecentContacts, loading } = useContacts();
  const recentContacts = getRecentContacts();

  if (loading) {
    return (
      <div className="recent-contacts-loading">
        <div className="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="recent-contacts">
      <h2>Contactos recientes</h2>
      <div className="recent-contacts-grid">
        {recentContacts.map(contact => (
          <div key={contact.id} className="contact-card-wrapper">
            <ContactCard contact={contact} onEdit={onEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentContacts;
