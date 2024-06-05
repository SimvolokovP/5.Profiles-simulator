import { useEffect, useState } from "react";
import MessageBox from "./components/MessageBox/MessageBox";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useLocalStorage } from "./utils/useLocalStorage";

function App() {
  const [profile, setProfile] = useLocalStorage('profile', []);
  const [messageHidden, setMessageHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMessageHidden(false);
    }, 1200);
  }, []);

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])

  function submitNewProfile(targetProfile) {
    setProfile([targetProfile]);
  }

  return (
    <>
      <Router>
        <div className="message__area container">
          <MessageBox setHidden={setMessageHidden} hidden={messageHidden} />
        </div>
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage initProfile={profile} />}></Route>
            <Route path="/login" element={<LoginPage submitNewProfile={submitNewProfile} />}></Route>
            <Route path="/profile" element={<ProfilePage profile={profile} />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
