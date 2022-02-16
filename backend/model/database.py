from msilib import schema
import motor.motor_asyncio
from model.schema import Student


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.AlumniServices
collection = database.students