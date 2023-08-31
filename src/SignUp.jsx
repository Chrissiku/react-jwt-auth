import { useState } from "react";
import BASE_URL from "./constants";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [role, setRole] = useState(0);
  const [location, setLocation] = useState("");
  const [national_id, setNationalId] = useState("");

  const handleSignUp = async () => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          first_name,
          last_name,
          role: parseInt(role),
          location,
          national_id,
        },
      }),
    });

    if (response.ok) {
      // Handle successful sign up, e.g., redirect to login
      alert("sign-up successful");
      window.location.href = "/";
    } else {
      // Handle sign-up error
      alert("Error signing up.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <input
        type="text"
        placeholder="fist name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        placeholder="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        placeholder="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="National Id"
        value={national_id}
        onChange={(e) => setNationalId(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
