from fastapi import APIRouter

from api.schema.career_recommendations import CareerRecommendationsIn

router = APIRouter(prefix="/career-recommendations", tags=["career recommendations"])


# Process Character Analysis
@router.post("/generate")
async def generate_career_recommendations(body: CareerRecommendationsIn):
    """Generate career matches, university/department suggestions,
    and a roadmap based on the student's personality profile.

    Response: JSON with career matches, university recommendations, and
    a step-by-step roadmap.

    Use case: Leverage YÖK Atlas integration and AI agents for personalized recommendations.
    """
    pass
