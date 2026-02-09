from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from routers.employee import router as employee_router
from routers.attendance import router as attendance_router

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="HRMS Lite API",
    description="Lightweight HRMS backend for employee and attendance management",
    version="1.0.0",
)

# Enable CORS (allow frontend + future deployments)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ✅ IMPORTANT for Vercel
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/")
def root():
    return {"message": "HRMS Lite Backend Running 🚀"}

# Register routers
app.include_router(employee_router)
app.include_router(attendance_router)

