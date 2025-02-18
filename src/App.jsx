import { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import Menu from "./components/Menu";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactSearch from "./components/ContactSearch";
import EditContact from "./components/EditContact";
import RecentContacts from "./components/RecentContacts";

const App = () => {
    const [currentView, setCurrentView] = useState("menu");
    const [selectedContact, setSelectedContact] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleMenuSelect = (option) => {
        if (option === "close") {
            setIsClosing(true);
            setTimeout(() => {
                console.log("Address book closed");
            }, 500);
        } else {
            setCurrentView(option);
        }
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setCurrentView("edit");
    };

    return (
        <ContactProvider>
            <div className={`app ${isClosing ? "closing" : ""}`}>
                <div className="app-header">
                    <h1 onClick={() => setCurrentView("menu")}>Agenda</h1>
                    <Menu onMenuSelect={handleMenuSelect} />
                </div>

                <main className="app-content">
                    {currentView === "menu" && (
                        <RecentContacts onEdit={handleEdit} />
                    )}

                    {currentView === "add" && (
                        <AddContact onClose={() => setCurrentView("menu")} />
                    )}

                    {currentView === "list" && (
                        <ContactList onEdit={handleEdit} />
                    )}

                    {currentView === "search" && <ContactSearch />}

                    {currentView === "edit" && selectedContact && (
                        <EditContact
                            contact={selectedContact}
                            onClose={() => setCurrentView("list")}
                        />
                    )}
                </main>
            </div>
        </ContactProvider>
    );
};

export default App;
