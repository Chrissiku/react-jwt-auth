import { useState } from "react";
import BASE_URL from "./constants";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const response = await fetch(`${BASE_URL}/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email, password } }),
    });

    if (response.ok) {
      const authToken = response.headers.get("Authorization");

      if (authToken) {
        // Store the authentication token in local storage
        localStorage.setItem("authToken", authToken);
        alert("Sign-in successful");
        window.location.href = "/";
      } else {
        alert("Authentication token missing in response headers.");
      }
    } else {
      alert("Error signing in.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
