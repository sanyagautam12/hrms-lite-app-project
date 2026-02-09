import { useEffect, useState } from "react";
import api from "../api/api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  if (!employees.length) return <p>No employees found</p>;

  return (
    <div>
      <h3>Employees</h3>
      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.full_name} ({e.employee_id}) - {e.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
