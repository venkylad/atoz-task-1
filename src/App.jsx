import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { useEffect, useState } from "react";
import { getRandomColor } from "../utils";
import Navbar from "./components/Navbar";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

function App() {
  const defaultState = [{ id: 1, bgColor: getRandomColor() }];
  const [circles, setCircles] = useState(defaultState);
  const [users, setUsers] = useState([]);

  const fetchSingleUser = async () => {
    const res = await fetch("https://random-data-api.com/api/v2/users");
    const data = await res.json();
    setUsers([...users, data]);
  };

  useEffect(() => {
    fetchSingleUser();
  }, []);

  const duplicateCircle = (data) => {
    if (circles.length < 10) {
      fetchSingleUser();
      setCircles([
        ...circles,
        { id: Math.floor(Math.random() * 1000), bgColor: data },
      ]);
    }
  };

  return (
    <main>
      <Router>
        <Navbar />
        <div className="max-w-[1200px] mx-auto">
          {" "}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home circles={circles} duplicateCircle={duplicateCircle} />
              }
            />

            <Route path="/users" element={<Users users={users} />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
