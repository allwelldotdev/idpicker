from pydantic import BaseModel


class CareerRecommendationsIn(BaseModel):
    student_id: int
    personality_profile: dict
    yok_atlas_filters: dict
