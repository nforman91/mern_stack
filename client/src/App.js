import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Single from "./pages/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
