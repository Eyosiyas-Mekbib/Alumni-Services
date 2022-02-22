# 
FROM python:3.9

# 
WORKDIR /app

# 
COPY ./requirements.txt /app

# 
RUN pip install -r /app/requirements.txt

# 
COPY ./ /app

EXPOSE 80
# 
CMD ["uvicorn", "app.main:app", "--reload"]
