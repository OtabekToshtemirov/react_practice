import { Outlet, NavLink } from 'react-router-dom';
// Bu Layout package



const Layout = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
    });
  
    return (
      <>
        <h1>React Router</h1>
  
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <NavLink to="/home" style={style}>
            Home
          </NavLink>
          <NavLink to="/about" style={style}>
            About
          </NavLink>
        </nav>
  
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </>
    );
  };
  export default Layout;
