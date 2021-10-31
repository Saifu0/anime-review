from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import RegisterUserSerializer, MyTokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated


class AddReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data)

        return Response(data={
            "error": "unable to add review"
        }, status=status.HTTP_400_BAD_REQUEST)


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class CustomUserRegister(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        register_serializer = RegisterUserSerializer(data=request.data)
        if register_serializer.is_valid():
            newuser = register_serializer.save()
            if newuser:
                return Response(data={
                    "message": "user successfully created!"
                }, status=status.HTTP_201_CREATED)
        return Response(data={
            "error": register_serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(data={
                "message": "user successfully logged out!"
            }, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(data={
                "error": "unable to logout"
            }, status=status.HTTP_400_BAD_REQUEST)
