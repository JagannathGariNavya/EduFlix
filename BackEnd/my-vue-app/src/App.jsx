import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllComponents from "./ashwin_components/AllComponents";
import Login from "./ashwin_components/Login";

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route
        path="*"
        element={
          isAuth ? (
            <AllComponents setAuth={setAuth} />
          ) : (
            <Login setAuth={setAuth} />
          )
        }
      />
    </Routes>
  );
}

export default App;
