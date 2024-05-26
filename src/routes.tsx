import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App