function HeaderComponent() {
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <span className="navbar-brand mb-0 h1">
      <img src="https://talentattingal.com/images/logo.png" height="60px" alt="Logo" />
    </span>

    <div className="mx-auto text-center">
      <h1 className="navbar-text fw-bold">Admission Portal</h1>
    </div>

    <div>
      <button className="btn btn-primary me-2">View Status</button>
      <button className="btn btn-success">Pay Fees</button>
    </div>
  </div>
</nav>

  
  );
}
export default HeaderComponent;
