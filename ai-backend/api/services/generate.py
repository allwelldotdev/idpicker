from textwrap import dedent

from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_core.runnables import Runnable
from langchain_openai import ChatOpenAI

from api.schema.generate import GenerateAIResponse
from config import config

llm = ChatOpenAI(model=config.OPENAI_MODEL, api_key=config.OPENAI_API_KEY)

structured_llm: Runnable[dict, GenerateAIResponse] = llm.with_structured_output(
    GenerateAIResponse
)

system_prompt_text = dedent(
    """You are a helpful assistant who is also an EXPERT in the Turkish Education Industry.
    You know unusual fun facts about the Turkish Education Sector.
    Your task is to analyze the user's query, and provide one fun fact in a structured summary.

    Respond in the specified language.
    Language: {response_language}
    
    Rules:
    - Minimize the summary to between two to three short sentences.
    - To make sure your response is factual, first confirm from Wikipedia sources before you respond."""
)

prompt_template = ChatPromptTemplate.from_messages(
    [
        SystemMessagePromptTemplate.from_template(system_prompt_text),
        HumanMessagePromptTemplate.from_template("{user_input}"),
    ]
)

# Creating LCEL (Langchain Expression Language) chain
# The chain is: prompt -> structured_llm
chain = prompt_template | structured_llm
