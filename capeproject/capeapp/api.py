from capeapp.models import Author
from capeapp.models import Book
from rest_framework import viewsets,permissions
from .serializers import BookSerializer
from .serializers import AuthorSerializer

class CapeAuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AuthorSerializer

class CapeBookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BookSerializer