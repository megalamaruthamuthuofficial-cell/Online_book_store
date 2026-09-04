from django import forms


class CheckoutForm(forms.Form):

    full_name = forms.CharField(
        max_length=150
    )

    email = forms.EmailField()

    phone = forms.CharField(
        max_length=15
    )

    address = forms.CharField(
        widget=forms.Textarea,
        max_length=500
    )

    city = forms.CharField(
        max_length=100
    )

    postal_code = forms.CharField(
        max_length=10
    )