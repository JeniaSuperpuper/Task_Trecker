from .serializers import UserSerializer
from rest_framework import generics
from .models import User
# Create your views here.

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class =UserSerializer