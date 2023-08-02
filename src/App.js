import "./App.css";
import Navbar from "./Components/Navbar";
import NewsList from "./Components/NewsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<NewsList key="general" category="general" />}
        ></Route>
        <Route 
          path="/entertainment"
          element={<NewsList key="entertainment" category="entertainment" />}
        ></Route>
        <Route
          path="/business"
          element={<NewsList key="business" category="business" />}
        ></Route>
        <Route
          path="/health"
          element={<NewsList key="health" category="health" />}
        ></Route>
        
        <Route
          path="/science"
          element={<NewsList key="science" category="science" />}
        ></Route>
        <Route
          path="/sports"
          element={<NewsList key="sports" category="sports" />}
        ></Route>
        <Route
          path="/technology"
          element={<NewsList key="technology" category="technology" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
// State -> Whenever the state changes, the components re-render.
