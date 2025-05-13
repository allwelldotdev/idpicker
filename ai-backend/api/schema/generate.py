from typing import Optional

from pydantic import BaseModel, Field


class GenerateIn(BaseModel):
    query: str = Field(description="The user's query or prompt.")
    response_language: str = Field(
        description="The language the AI should respond in (e.g. 'Engligh', 'Turkish')."
    )


class GenerateAIResponse(BaseModel):
    topic: str = Field(description="The main topic of the user's query.")
    summmary: str = Field(
        description="A brief and factual (answer) summary to the user's query."
    )
    popularity_rating: Optional[int] = Field(
        default=None, description="How popular the fact is in Turkey, from 1 to 10."
    )
    response_language: str = Field(
        description="The language the response is provided in."
    )


class GenerateOut(BaseModel):
    user: GenerateIn
    assistant: GenerateAIResponse
