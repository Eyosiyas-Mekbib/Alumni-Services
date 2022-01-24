FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

WORKDIR /app

COPY ./app /app

CMD ["uvicorn", "app.main:app --reload"]