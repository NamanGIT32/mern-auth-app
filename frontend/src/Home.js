import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "./utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserInfo(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("email");
    localStorage.removeItem("isGoogleLogin");
    localStorage.removeItem("picture");
    handleSuccess("logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="App">
      <h1>{userInfo}</h1>
      <img src={localStorage.getItem("picture")} alt="profile" />
      <h3>{localStorage.getItem("email")}</h3>
      <button onClick={() => handleLogout()}>Logout</button>
      <ToastContainer/>
    </div>
  );
}

export default Home;
