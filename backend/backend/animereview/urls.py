from django.urls import path
from .views import CustomUserRegister, BlacklistTokenView

urlpatterns = [
    path('register/', CustomUserRegister.as_view(), name="register_user"),
    path('logout/', BlacklistTokenView.as_view(), name="logout_user")
]
