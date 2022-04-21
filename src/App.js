import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ExplorePage } from "./pages/explore/explore";
import { HistoryPage } from "./pages/history/history";
import { HomePage } from "./pages/Homepage/pages";
import { LikedPage } from "./pages/liked/liked";
import { LogInPage } from "./pages/Login/login";
import { PlaylistPage } from "./pages/playlist/playlist";
import { SignUpPage } from "./pages/signUp/signUp";
import { WatchLaterPage } from "./pages/watchLater/watchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/WatchLater" element={<WatchLaterPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
