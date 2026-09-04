from google import genai
from django.conf import settings


def generate_book_summary(title, author, description):
    if not settings.GEMINI_API_KEY:
        raise ValueError("GEMINI_API_KEY is not configured.")

    client = genai.Client(
        api_key=settings.GEMINI_API_KEY
    )

    prompt = f"""
You are an AI assistant for an online bookstore.

Create a useful and easy-to-understand summary for the following book.

Book Title: {title}
Author: {author}
Book Description: {description}

Requirements:
- Write in simple English.
- Give a clear and helpful summary.
- Keep it around 100-150 words.
- Use only information available in the provided details.
- Do not invent facts about the book.
- Do not mention that you are an AI.
"""

    response = client.models.generate_content(
        model="gemini-3.7-flash",
        contents=prompt
    )

    if not response.text:
        raise ValueError("Gemini returned an empty response.")

    return response.text.strip()