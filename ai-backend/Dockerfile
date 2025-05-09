FROM python:3.12.10-slim-bullseye

WORKDIR /app

# Install uv
RUN pip install --no-cache-dir uv

COPY requirements.txt .

# Install dependencies with uv
RUN uv pip install --system -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]