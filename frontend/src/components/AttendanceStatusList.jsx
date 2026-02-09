import { useEffect, useState } from "react";
import api from "../api/api";
import "./attendance.css";

const AttendanceStatusList = () => {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [employees, setEmployees] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const fetchAttendance = async () => {
    setLoading(true);
    const map = {};

    for (const emp of employees) {
      const res = await api.get(`/attendance/${emp.id}`);
      const record = res.data.find((a) => a.date === date);
      if (record) map[emp.id] = record.status;
    }

    setAttendanceMap(map);
    setLoading(false);
  };

  const present = employees.filter(
    (e) => attendanceMap[e.id] === "Present"
  );
  const absent = employees.filter(
    (e) => !attendanceMap[e.id] || attendanceMap[e.id] === "Absent"
  );

  return (
    <div className="attendance-card">
      <h2 className="title">Attendance Status</h2>
      <p className="subtitle">Date: {date}</p>

      <div className="controls">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={fetchAttendance}>View Attendance</button>
      </div>

      {loading && <p className="loading">Loading attendance...</p>}

      <div className="status-grid">
        {/* Present */}
        <div className="status-box present">
          <h3>Present ({present.length})</h3>
          {present.length === 0 ? (
            <p>No present employees</p>
          ) : (
            <ul>
              {present.map((e) => (
                <li key={e.id}>
                  {e.full_name} <span>({e.employee_id})</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Absent */}
        <div className="status-box absent">
          <h3>Absent ({absent.length})</h3>
          {absent.length === 0 ? (
            <p>No absent employees</p>
          ) : (
            <ul>
              {absent.map((e) => (
                <li key={e.id}>
                  {e.full_name} <span>({e.employee_id})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceStatusList;