
from unittest import async_case
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from model.schema import Student

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/students")
async def get_students():
    return 1

@app.get("/students/{studentId}")
async def get_student():
    return 2

@app.post("/students")
async def add_student():
    return 3

@app.put("/students/{studentId}")
async def update_student():
    return 4

@app.delete("/students/{studentId}")
async def delete_student():
    return 5

