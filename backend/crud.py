from sqlalchemy.orm import Session
from models import Employee
from schemas import EmployeeCreate
from models import Attendance
from schemas import AttendanceCreate

def get_employees(db: Session):
    return db.query(Employee).all()

def create_employee(db: Session, employee: EmployeeCreate):
    db_employee = Employee(
        employee_id=employee.employee_id,
        full_name=employee.full_name,
        email=employee.email,
        department=employee.department
    )
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

def delete_employee(db: Session, employee_id: int):
    emp = db.query(Employee).filter(Employee.id == employee_id).first()
    if emp:
        db.delete(emp)
        db.commit()
    return emp

def mark_attendance(db: Session, attendance: AttendanceCreate):
    record = Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

def get_attendance_by_employee(db: Session, employee_id: int):
    return db.query(Attendance).filter(
        Attendance.employee_id == employee_id
    ).all()
