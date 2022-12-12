import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error({ auth }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  });
}

export default Error;
