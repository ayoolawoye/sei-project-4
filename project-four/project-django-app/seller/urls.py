from django.urls import path
from .views import SellerListView

urlpatterns = [
    path("", SellerListView.as_view()),
]