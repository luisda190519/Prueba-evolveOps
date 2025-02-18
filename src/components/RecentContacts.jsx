import { useContacts } from "../context/ContactContext";

const RecentContacts = () => {
    const { getRecentContacts, loading } = useContacts();
    const recentContacts = getRecentContacts();

    if (loading) {
        return (
            <div className="recent-contacts-loading">
                <div className="loading-spinner"></div>
                <p>Loading recent contacts...</p>
            </div>
        );
    }

    return (
        <div className="recent-contacts">
            <h2>Recent Contacts</h2>
            <div className="recent-contacts-grid">
                {recentContacts.map((contact) => (
                    <div key={contact.id} className="contact-card">
                        <div className="contact-avatar">
                            {contact.name.charAt(0)}
                        </div>
                        <div className="contact-info">
                            <h3>{contact.name}</h3>
                            <p>{contact.phone}</p>
                            <p className="contact-email">{contact.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentContacts;
