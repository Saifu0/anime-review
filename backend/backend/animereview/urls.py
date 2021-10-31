from django.urls import path
from .views import CustomUserRegister, BlacklistTokenView, AddReviewView

urlpatterns = [
    path('add-review/', AddReviewView.as_view(), name="add_review"),
    path('register/', CustomUserRegister.as_view(), name="register_user"),
    path('logout/', BlacklistTokenView.as_view(), name="logout_user")
]
