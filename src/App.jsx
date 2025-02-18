import { useState } from 'react';
import { ContactProvider } from './context/ContactContext';
import Menu from './components/Menu';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactSearch from './components/ContactSearch';
import EditContact from './components/EditContact';
import RecentContacts from './components/RecentContacts';

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleMenuSelect = (option) => {
    setCurrentView(option);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setCurrentView('edit');
  };

  return (
    <ContactProvider>
      <div className="app">
        <div className="app-header">
          <h1>Address Book</h1>
          <Menu onMenuSelect={handleMenuSelect} />
        </div>
        
        <main className="app-content">
          {currentView === 'menu' && <RecentContacts />}
          
          {currentView === 'add' && (
            <AddContact onClose={() => setCurrentView('menu')} />
          )}
          
          {currentView === 'list' && (
            <ContactList onEdit={handleEdit} />
          )}
          
          {currentView === 'search' && (
            <ContactSearch />
          )}
          
          {currentView === 'edit' && selectedContact && (
            <EditContact
              contact={selectedContact}
              onClose={() => setCurrentView('list')}
            />
          )}
        </main>
      </div>
    </ContactProvider>
  );
};

export default App;