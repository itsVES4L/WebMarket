import React from "react";
import { Link } from "react-router-dom";
// import { LOGOUT } from "../../services/API";

import { Header } from "../../common/components";

const HomePage = () => {
 

  const logOutHandler = () => {
    // LOGOUT("/auth/logout/");
  };

  return (
    <div className="w-screen min-h-screen ">
     <Header/>
     <section>
      
     </section>
     
    </div>
  );
};

export default HomePage;
