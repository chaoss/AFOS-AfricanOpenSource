import { BrowserRouter as Router,Routes, Route , Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/Project";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/" */}
          <Route path="/" exact element={<Home />} />
          {/* This route is for projectPage component 
          with exact path "/projects" */}
          <Route path="/projects" element={<ProjectPage />} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
