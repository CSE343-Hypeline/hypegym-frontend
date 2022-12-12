import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Error404() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login")
  })
}

export default Error404