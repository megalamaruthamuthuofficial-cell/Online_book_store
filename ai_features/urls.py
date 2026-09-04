from django.urls import path

from . import views


urlpatterns = [
    path(
        "book/<int:book_id>/summary/",
        views.book_ai_summary,
        name="book_ai_summary",
    ),
]