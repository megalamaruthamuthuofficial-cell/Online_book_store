from django.contrib import messages
from django.shortcuts import redirect, render

from .forms import NewsletterForm


def subscribe(request):

    if request.method == "POST":
        form = NewsletterForm(request.POST)

        if form.is_valid():
            form.save()

            messages.success(
                request,
                "You have successfully subscribed to our newsletter."
            )

            return redirect("newsletter_subscribe")

    else:
        form = NewsletterForm()

    return render(
        request,
        "newsletter/subscribe.html",
        {
            "form": form
        }
    )