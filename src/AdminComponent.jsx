function AdminComponent() {
  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <p>You are logged in as Farmer </p>
      {/* Admin-specific UI components */}
    </div>
  );
}

function UserComponent() {
  return (
    <div>
      <h2>Customer Dashboard</h2>
      <p>You are logged in as Customer </p>
      {/* User-specific UI components */}
    </div>
  );
}

export { AdminComponent, UserComponent };
