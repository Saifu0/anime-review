from django.urls import path
from .views import CustomUserRegister, BlacklistTokenView, AddReviewView, ListReviewView, CalculateAverageRatingView

urlpatterns = [
    path('register/', CustomUserRegister.as_view(), name="register_user"),
    path('logout/', BlacklistTokenView.as_view(), name="logout_user"),
    path('add-review/', AddReviewView.as_view(), name="add_review"),
    path('review/<int:anime_id>', ListReviewView.as_view(), name="list_review"),
    path('average-rating/', CalculateAverageRatingView.as_view(),
         name="calculate_average_rating"),
]
