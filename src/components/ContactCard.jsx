const ContactCard = ({ contact }) => {
    return (
        <div className="contact-card">
            <div className="contact-avatar">{contact.name.charAt(0)}</div>
            <div className="contact-info">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
                <p className="contact-email">{contact.email}</p>
            </div>
        </div>
    );
};

export default ContactCard;
