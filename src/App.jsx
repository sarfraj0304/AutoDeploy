import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import RepoList from "./components/RepoList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/html" element={<RepoList />} />
        <Route path="/css" element={<RepoList />} />
        <Route path="/js" element={<RepoList />} />
      </Routes>
    </>
  );
}

export default App;
