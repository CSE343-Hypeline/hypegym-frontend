
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ErrorwithLogin() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/dashboard")
    })

}

export default ErrorwithLogin