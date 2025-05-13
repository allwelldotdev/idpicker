from fastapi import FastAPI

from api.routes.career_recommendations import router as career_recommendations
from api.routes.character_analysis import router as character_analysis
from api.routes.generate import router as generate
from api.routes.report import router as report

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello World!": "IDPicker AI Inference Backend API is running!"}


app.include_router(report)
app.include_router(generate)
app.include_router(character_analysis)
app.include_router(career_recommendations)
