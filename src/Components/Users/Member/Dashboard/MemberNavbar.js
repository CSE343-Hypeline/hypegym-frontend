import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./main.css";
import Widget from "../Widgets/Widget";
import { apiMe } from "../../../API";

function MemberNavbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const [user, setuser] = useState();

    useEffect(() => {
        apiMe().then((response) => {
            if (response.status === 200) setuser(response.data);
            else;
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