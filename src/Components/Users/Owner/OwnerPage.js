import { Sidebar as Example } from "../../sidebars/sidebar-1/Sidebar";
import "./OwnerPage.css";
import { button } from "../../API";
import { useEffect } from "react";

function OwnerPage({ auth }) {
  useEffect(() => {
    pingTest();
  }, []);

  const pingTest = () => {
    button()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <div>
      <Example />
    </div>
  );
}

export default OwnerPage;
