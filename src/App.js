import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ExplorePage,
  HistoryPage,
  HomePage,
  LikedPage,
  WatchLaterPage,
  PlaylistPage,
  LogInPage,
  SignUpPage,
} from "./pages/index";
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
