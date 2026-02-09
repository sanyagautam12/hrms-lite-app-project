import { useEffect, useState } from "react";
import api from "../api/api";

export default function AttendanceForm() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });
  const [loading, setLoading] = useState(false);

  // Fetch employees for dropdown
  useEffect(() => {
    api.get("/employees")
      .then((res) => setEmployees(res.data))
      .catch(() => alert("Failed to load employees"));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.employee_id || !form.date) {
      alert("Please select employee and date");
      return;
    }

    setLoading(true);

    try {
      await api.post("/attendance", {
        employee_id: Number(form.employee_id),
        date: form.date,
        status: form.status,
      });

      alert("Attendance marked successfully ✅");

      // reset only date & status
      setForm({ ...form, date: "", status: "Present" });

    } catch (err) {
      if (err.response?.status === 409) {
        alert("Attendance already marked for this employee on this date ⚠️");
      } else if (err.response?.status === 404) {
        alert("Employee not found");
      } else {
        alert("Something went wrong while marking attendance");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Mark Attendance</h3>

      {/* Employee Dropdown */}
      <select
        name="employee_id"
        value={form.employee_id}
        onChange={handleChange}
        required
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name} ({emp.employee_id})
          </option>
        ))}
      </select>

      {/* Date */}
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      {/* Status */}
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Mark Attendance"}
      </button>
    </form>
  );
}
