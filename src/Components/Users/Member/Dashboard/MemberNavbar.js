import { useRef, useState, useEffect } from "react";
import "./main.css";
import { apiMe, getTrainers } from "../../../API";

function MemberNavbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [user, setuser] = useState();

  useEffect(() => {
    apiMe().then((response) => {
      setuser(response.data);
    });
  }, []);
  if (user) {
    return (
      <header>
        <h3>WELCOME,{user.email}</h3>
      </header>
    );
  }
}

export default MemberNavbar;
