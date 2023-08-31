function SignOut() {
  const handleSignOut = async () => {
    const response = await fetch("http://127.0.0.1:3000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `${localStorage.getItem("authToken")}`,
      },
    });

    if (response.ok) {
      // Handle successful sign out, e.g., clear token and redirect to sign-in
      localStorage.removeItem("authToken");
      window.location.href = "/";
    } else {
      // Handle sign-out error
      alert("Error signing out.");
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
