from pydantic import BaseModel


class CharacterAnalysisIn(BaseModel):
    student_id: int
    quiz_responses: list[dict]
    social_media_data: dict | None = None
    video_url: str | None = None
