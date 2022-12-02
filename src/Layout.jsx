import { Outlet, NavLink } from 'react-router-dom';
<<<<<<< HEAD

=======
// Bu Layout package
>>>>>>> 2f64b9fce2b7a16387fdcc6b2e2dfb8bd4a39ddb



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
<<<<<<< HEAD
  export default Layout;
=======
  export default Layout;
>>>>>>> 2f64b9fce2b7a16387fdcc6b2e2dfb8bd4a39ddb
