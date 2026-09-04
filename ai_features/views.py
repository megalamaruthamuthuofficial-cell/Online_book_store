from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render

from books.models import Book

from .gemini_service import generate_book_summary


def book_ai_summary(request, book_id):
    book = get_object_or_404(
        Book,
        id=book_id
    )

    try:
        summary = generate_book_summary(
            title=book.title,
            author=book.author,
            description=book.description,
        )

        return render(
            request,
            "books/ai_summary.html",
            {
                "book": book,
                "ai_summary": summary,
            }
        )

    except Exception:
        messages.error(
            request,
            "Unable to generate the AI summary right now. Please try again."
        )

        return redirect(
            "book_detail",
            pk=book.id
        )