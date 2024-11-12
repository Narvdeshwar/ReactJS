import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthContext";


localStorage.clear()
function App() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser("admin");
        setCurrentUser({ role: "admin" });
      }
    }
  }, [authData]);

  const handleAuth = ({ email, password }) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData && authData.getEmployee) {
      const employee = authData.getEmployee.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        console.log("employee logged successfully");
        setUser("employee");
        setCurrentUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      } else {
        alert("Invalid credentials"); // Consider using state for error handling in production
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleAuth={handleAuth} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={currentUser} />}
    </>
  );
}

export default App;
