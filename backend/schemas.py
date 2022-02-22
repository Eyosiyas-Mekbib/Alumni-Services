import datetime as _dt
import pydantic as _pydantic


class _BaseStudentRequest(_pydantic.BaseModel):
    full_name: str
    degree_level: str
    program_of_study: str
    mailing_agent: str
    completed: bool

class StudentRequest(_BaseStudentRequest):
    id: int
    date_created: _dt.datetime

    class Config:
        orm_mode = True


class CreateStudentRequest(_BaseStudentRequest):
    pass
