
import React from "react";

import Counters from "./Counters";
function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

function NavBar(){
  return(
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
    </nav>
  );
}

export default App;
