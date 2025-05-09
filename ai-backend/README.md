Building AI Inference API Backend for IDPicker.

# Student Module (MVP)

## Stages of API calls
1. `api.routes.character_analysis.py`: handles processing of student character analysis based on analysis-quiz data, social media or video analysis.
2. `api.routes.career_recommendations.py`: uses data created and stored in database by `character_analysis.py` to generate career recommendations, university/department suggestions, based on student's personality profile.
3. `api.routes.report.py`: handles creating and getting of student report in both short (summarized/dynamic/json) and extended (pdf) format, gated by subscription status. Using database data on student's personality profile and career recommendations.