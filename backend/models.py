import datetime as _dt
import sqlalchemy as _sql

import database as _database


class StudentRequest(_database.Base):
    __tablename__ = "student_request"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    full_name = _sql.Column(_sql.String, index=True)
    degree_level = _sql.Column(_sql.String, index=True)
    program_of_study = _sql.Column(_sql.String, index=True)
    mailing_agent = _sql.Column(_sql.String, index=True)
    completed = _sql.Column(_sql.BOOLEAN, index=True)
    date_created = _sql.Column(_sql.DateTime, default=_dt.datetime.utcnow)
