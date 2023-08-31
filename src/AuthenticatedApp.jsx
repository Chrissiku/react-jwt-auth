import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import { AdminComponent, UserComponent } from "./AdminComponent";

function AuthenticatedApp() {
  const [user, setUser] = useState(null);

  // Fetch user data after successful sign-in
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:3000/current_user", {
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // Handle fetch user data error
      }
    };

    if (localStorage.getItem("authToken")) {
      fetchUserData();
    }
  }, []);

  if (!localStorage.getItem("authToken")) {
    return (
      <div>
        <SignIn />
        <SignUp />
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user.data.email}!</h3>
          <p>Welcome, {user.data.first_name}!</p>
          <p>Welcome, {user.data.last_name}!</p>
          <p>Welcome, {user.data.location}!</p>
          <p>Welcome, {user.data.role}!</p>
          <p>Welcome, {user.data.national_id}!</p>
          {user.data.role === "farmer" && <AdminComponent />}
          {user.data.role === "customer" && <UserComponent />}

          <SignOut />
        </>
      ) : (
        // Handle loading state if user data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AuthenticatedApp;
