import { Outlet } from 'react-router-dom';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import './layout.css';

const Layout = () => (
  <div className="flex">
    <section className="leftside-bar-container">
      <LeftSidebar />
    </section>
    <section className="outlet-container">
      <Outlet />
    </section>
  </div>
);

export default Layout;
