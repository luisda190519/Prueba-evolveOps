const Menu = ({ onMenuSelect }) => {
  return (
    <div className="menu">
      <button onClick={() => onMenuSelect('add')}>Añadir Contacto</button>
      <button onClick={() => onMenuSelect('list')}>Listado de Contactos</button>
      <button onClick={() => onMenuSelect('search')}>Buscar Contacto</button>
      <button onClick={() => onMenuSelect('close')}>Cerrar agenda</button>
    </div>
  );
};

export default Menu;