import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProfilePage from './pages/profilePage/ProfilePage';
import Home from './pages/Home/Home';
import Topbar from './components/topbar/Topbar';
import './App.css';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
