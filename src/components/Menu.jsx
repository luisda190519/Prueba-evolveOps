const Menu = ({ onMenuSelect }) => {
  return (
    <div className="menu">
      <button onClick={() => onMenuSelect('add')}>Add Contact</button>
      <button onClick={() => onMenuSelect('list')}>List Contacts</button>
      <button onClick={() => onMenuSelect('search')}>Search Contact</button>
      <button onClick={() => onMenuSelect('close')}>Close Address Book</button>
    </div>
  );
};

export default Menu;