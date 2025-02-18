import { createContext, useState, useContext, useEffect } from 'react';

const ContactContext = createContext();

const mockContacts = [
  { id: 1, name: "Emma Watson", phone: "+1 (555) 123-4567", email: "emma.w@email.com", createdAt: "2024-02-17T10:30:00" },
  { id: 2, name: "James Smith", phone: "+1 (555) 234-5678", email: "james.s@email.com", createdAt: "2024-02-16T15:45:00" },
  { id: 3, name: "Sophia Chen", phone: "+1 (555) 345-6789", email: "sophia.c@email.com", createdAt: "2024-02-15T09:20:00" },
  { id: 4, name: "Miguel Rodriguez", phone: "+1 (555) 456-7890", email: "miguel.r@email.com", createdAt: "2024-02-14T14:15:00" },
  { id: 5, name: "Sarah Johnson", phone: "+1 (555) 567-8901", email: "sarah.j@email.com", createdAt: "2024-02-13T11:10:00" },
  { id: 6, name: "Alex Thompson", phone: "+1 (555) 678-9012", email: "alex.t@email.com", createdAt: "2024-02-12T16:30:00" },
  { id: 7, name: "Lisa Brown", phone: "+1 (555) 789-0123", email: "lisa.b@email.com", createdAt: "2024-02-11T13:45:00" },
  { id: 8, name: "David Kim", phone: "+1 (555) 890-1234", email: "david.k@email.com", createdAt: "2024-02-10T10:20:00" },
  { id: 9, name: "Maria Garcia", phone: "+1 (555) 901-2345", email: "maria.g@email.com", createdAt: "2024-02-09T15:15:00" },
  { id: 10, name: "Tom Wilson", phone: "+1 (555) 012-3456", email: "tom.w@email.com", createdAt: "2024-02-08T12:40:00" },
];

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate API call to fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setContacts(mockContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    setContacts([newContact, ...contacts]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  const searchContacts = (query) => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getRecentContacts = () => {
    return contacts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);
  };

  return (
    <ContactContext.Provider value={{
      contacts,
      selectedContact,
      setSelectedContact,
      addContact,
      updateContact,
      searchContacts,
      getRecentContacts,
      loading
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);