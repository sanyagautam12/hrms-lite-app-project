import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* FULL-WIDTH HEADER */}
      <header className="dashboard-header">
        <h1>HRMS Lite Dashboard</h1>
        <p>Employee & Attendance Management System</p>
      </header>

      <main className="dashboard-content">{children}</main>
    </>
  );
};

export default Layout;
