import './App.css';
import Topbar from './components/topbar/Topbar';
import ProfilePage from './pages/profilePage/ProfilePage';
// import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Topbar />
      <div>
        {/* <Home /> */}
        <ProfilePage />
      </div>
    </>
  );
}

export default App;
