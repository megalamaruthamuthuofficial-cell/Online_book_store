from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render

from books.models import Book

from .models import Cart, CartItem


@login_required
def cart_view(request):
    cart, created = Cart.objects.get_or_create(
        user=request.user
    )

    return render(
        request,
        "cart/cart.html",
        {
            "cart": cart,
            "cart_items": cart.items.select_related("book"),
        }
    )


@login_required
def add_to_cart(request, book_id):
    book = get_object_or_404(Book, id=book_id)

    cart, created = Cart.objects.get_or_create(
        user=request.user
    )

    cart_item, created = CartItem.objects.get_or_create(
        cart=cart,
        book=book
    )

    if not created:
        cart_item.quantity += 1
        cart_item.save(update_fields=["quantity"])

    return redirect("cart_view")


@login_required
def increase_quantity(request, item_id):
    cart_item = get_object_or_404(
        CartItem,
        id=item_id,
        cart__user=request.user
    )

    cart_item.quantity += 1
    cart_item.save(update_fields=["quantity"])

    return redirect("cart_view")


@login_required
def decrease_quantity(request, item_id):
    cart_item = get_object_or_404(
        CartItem,
        id=item_id,
        cart__user=request.user
    )

    if cart_item.quantity > 1:
        cart_item.quantity -= 1
        cart_item.save(update_fields=["quantity"])
    else:
        cart_item.delete()

    return redirect("cart_view")


@login_required
def remove_from_cart(request, item_id):
    cart_item = get_object_or_404(
        CartItem,
        id=item_id,
        cart__user=request.user
    )

    cart_item.delete()

    return redirect("cart_view")