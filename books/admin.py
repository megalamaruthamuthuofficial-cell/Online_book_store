from django.contrib import admin
from .models import Category, Book


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "author",
        "category",
        "price",
        "is_featured",
        "created_at",
    )
    list_filter = ("category", "is_featured")
    search_fields = ("title", "author")
    ordering = ("-created_at",)