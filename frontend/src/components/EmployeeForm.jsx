import { useState } from "react";
import api from "../api/api";

export default function EmployeeForm({ onEmployeeAdded }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/employees", form);
    onEmployeeAdded();
    setForm({ employee_id: "", full_name: "", email: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <input name="employee_id" placeholder="EMP001" onChange={handleChange} value={form.employee_id} />
      <input name="full_name" placeholder="Full Name" onChange={handleChange} value={form.full_name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="department" placeholder="Department" onChange={handleChange} value={form.department} />
      <button type="submit">Add</button>
    </form>
  );
}
