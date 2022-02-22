from typing import TYPE_CHECKING, List
import fastapi as _fastapi
import sqlalchemy.orm as _orm

import schemas as _schemas
import services as _services

if TYPE_CHECKING:
    from sqlalchemy.orm import Session

app = _fastapi.FastAPI()


@app.post("/api/student_requests/", response_model=_schemas.StudentRequest)
async def create_student_request(
    student_request: _schemas.CreateStudentRequest,
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    return await _services.create_student_request(student_request=student_request, db=db)


@app.get("/api/student_requests/", response_model=List[_schemas.StudentRequest])
async def get_student_requests(db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_all_student_requests(db=db)


@app.get("/api/student_requests/{student_request_id}/", response_model=_schemas.StudentRequest)
async def get_student_request(
    student_request_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    student_request = await _services.get_student_request(db=db, student_request_id=student_request_id)
    if student_request is None:
        raise _fastapi.HTTPException(status_code=404, detail="StudentRequest does not exist")

    return student_request


@app.delete("/api/student_requests/{student_request_id}/")
async def delete_student_request(
    student_request_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    student_request = await _services.get_student_request(db=db, student_request_id=student_request_id)
    if student_request is None:
        raise _fastapi.HTTPException(status_code=404, detail="StudentRequest does not exist")

    await _services.delete_student_request(student_request, db=db)

    return "successfully deleted the user"


@app.put("/api/student_requests/{student_request_id}/", response_model=_schemas.StudentRequest)
async def update_student_request(
    student_request_id: int,
    student_request_data: _schemas.CreateStudentRequest,
    db: _orm.Session = _fastapi.Depends(_services.get_db),
):
    student_request = await _services.get_student_request(db=db, student_request_id=student_request_id)
    if student_request is None:
        raise _fastapi.HTTPException(status_code=404, detail="StudentRequest does not exist")

    return await _services.update_student_request(
        student_request_data=student_request_data, student_request=student_request, db=db
    )
