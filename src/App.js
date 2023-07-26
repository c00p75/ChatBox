/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import ProfilePage from './pages/profilePage/ProfilePage';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
