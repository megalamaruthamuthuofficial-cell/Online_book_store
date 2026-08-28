from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect, render

from .forms import LoginForm, RegisterForm


def register_view(request):

    if request.user.is_authenticated:
        return redirect("book_list")

    if request.method == "POST":

        form = RegisterForm(request.POST)

        if form.is_valid():

            user = form.save()

            login(request, user)

            messages.success(
                request,
                "Account created successfully."
            )

            return redirect("book_list")

    else:
        form = RegisterForm()

    return render(
        request,
        "accounts/register.html",
        {
            "form": form
        }
    )


class UserLoginView(LoginView):

    authentication_form = LoginForm

    template_name = "accounts/login.html"

    redirect_authenticated_user = True

    def get_success_url(self):
        return "/books/"


@login_required
def profile_view(request):

    return render(
        request,
        "accounts/profile.html",
        {
            "user": request.user
        }
    )


def logout_view(request):

    logout(request)

    messages.success(
        request,
        "You have been logged out successfully."
    )

    return redirect("login")