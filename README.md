#HRMS Lite Application
​
##Project Overview
​HRMS Lite is a lightweight, web-based Human Resource Management System designed to handle essential HR operations for small organizations. The application empowers admins to manage employee records and track daily attendance through a clean, intuitive interface.
​This project was developed as a full-stack coding assignment to demonstrate proficiency in:
​- Frontend Development: Clean UI and DOM manipulation.
​- Backend API Design: Creating robust endpoints.
​- Database Handling: Data persistence and retrieval.
- ​Validation: Ensuring data integrity at both ends.
​
##Tech Stack
​- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- ​Backend: Python, Flask (REST API)
- ​Database: SQLite
​- Tools: Git, GitHub, VS Code

##Steps to Run the Project Locally

###1. Clone the Repository
```bash
git clone
https://github.com/sanyagautam12/hrms-lite-app-project.git
cd hrms-lite-app-project
```

###2. Setup the Backend
```bash
cd backend
# Optional: Create a virtual environment
# python -m venv venv
# source venv/bin/activate (On Windows: venv\Scripts\activate)

pip install -r requirements.txt
python app.py
```
*The backend will be live at: http://127.0.0.1:5000*

###3. Setup the Frontend
- Navigate to the frontend folder.
- Open index.html directly in your browser.
*Pro Tip: Use the Live Server extension in VS Code for the best experience.*

##Features Implemented
1. Employee Management:
 -  Full CRUD (Create, Read, Delete) functionality.
 -  Prevention of duplicate Employee IDs.
 -  Client-side and Server-side validation (Email format, required fields).
2. Attendance Management:
 -  Mark status as Present or Absent.
 -  Historical attendance records per employee.

##Assumptions & Limitations
- Authentication: The system currently assumes a single admin user; no login/signup flow is implemented.
- Scope: Advanced features like Payroll, Leave Management, and Performance Reviews are out of scope for this version.
- Scale: Optimized for small-scale usage (SQLite is used for simplicity).
- Real-time: The UI requires a refresh or manual trigger to sync complex state changes.

##Learning Outcomes
* Seamless integration of a Vanilla JS frontend with a Flask REST API.
* Designing relational database schemas with SQLite.
* Handling Cross-Origin Resource Sharing (CORS) between frontend and backend.
* Structuring a repository for professional hand-off.

##Author
Sanya Gautam
B.Tech CSE Student
*GitHub: https://github.com/sanyagautam12*
