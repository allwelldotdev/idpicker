from fastapi import APIRouter, HTTPException

from api.schema.generate import GenerateIn, GenerateOut
from api.services.generate import chain

router = APIRouter(prefix="/generate", tags=["simple generate AI"])


@router.get("", response_model=GenerateOut)
async def ai_generate(request: GenerateIn):
    """A simple AI generation to test AI model inference."""
    try:
        ai_output = await chain.ainvoke(
            {
                "user_input": request.query,
                "response_language": request.response_language,
            }
        )
        response = {
            "user": GenerateIn(
                query=request.query, response_language=request.response_language
            ),
            "assistant": ai_output,
        }
        return response
    except Exception as e:
        print(f"An error occured: {e}")
        raise HTTPException(status_code=500, detail=f"Inference failed: {e}")
