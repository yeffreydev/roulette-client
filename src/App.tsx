import React from "react";
import AppState from "./context/AppState";
import Router from "./routes/";
function App() {
  return (
    <AppState>
      <Router />
    </AppState>
  );
}

export default App;
