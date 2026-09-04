from django import forms

from .models import NewsletterSubscription


class NewsletterForm(forms.ModelForm):

    class Meta:
        model = NewsletterSubscription
        fields = ["email"]

        widgets = {
            "email": forms.EmailInput(
                attrs={
                    "placeholder": "Enter your email address",
                    "autocomplete": "email",
                }
            )
        }

    def clean_email(self):
        email = self.cleaned_data["email"].lower().strip()

        if NewsletterSubscription.objects.filter(
            email=email
        ).exists():
            raise forms.ValidationError(
                "This email is already subscribed."
            )

        return email