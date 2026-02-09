import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceStatusList from "../components/AttendanceStatusList";


export default function Dashboard() {
  return (
    <div className="container">
      <h1>HRMS Lite Dashboard</h1>
      <EmployeeForm onEmployeeAdded={() => window.location.reload()} />
      <EmployeeList />
      <AttendanceForm />
      <div className="card">
        <AttendanceStatusList />
    </div>
    </div>
    
  );
}
