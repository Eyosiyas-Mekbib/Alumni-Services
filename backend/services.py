from typing import TYPE_CHECKING, List

import database as _database
import models as _models
import schemas as _schemas

if TYPE_CHECKING:
    from sqlalchemy.orm import Session


def _add_tables():
    return _database.Base.metadata.create_all(bind=_database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def create_student_request(
    student_request: _schemas.CreateStudentRequest, db: "Session"
) -> _schemas.StudentRequest:
    student_request = _models.StudentRequest(**student_request.dict())
    db.add(student_request)
    db.commit()
    db.refresh(student_request)
    return _schemas.StudentRequest.from_orm(student_request)


async def get_all_student_requests(db: "Session") -> List[_schemas.StudentRequest]:
    student_requests = db.query(_models.StudentRequest).all()
    return list(map(_schemas.StudentRequest.from_orm, student_requests))


async def get_student_request(student_request_id: int, db: "Session"):
    student_request = db.query(_models.StudentRequest).filter(_models.StudentRequest.id == student_request_id).first()
    return student_request


async def delete_student_request(student_request: _models.StudentRequest, db: "Session"):
    db.delete(student_request)
    db.commit()


async def update_student_request(
    student_request_data: _schemas.CreateStudentRequest, student_request: _models.StudentRequest, db: "Session"
) -> _schemas.StudentRequest:
    student_request.first_name = student_request_data.first_name
    student_request.last_name = student_request_data.last_name
    student_request.email = student_request_data.email
    student_request.phone_number = student_request_data.phone_number

    db.commit()
    db.refresh(student_request)

    return _schemas.StudentRequest.from_orm(student_request)
