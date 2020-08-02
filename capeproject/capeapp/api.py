from capeapp.models import Author
from capeapp.models import Book
from rest_framework import viewsets,permissions
from .serializers import BookSerializer
from .serializers import AuthorSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter, OrderingFilter

class CapeAuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AuthorSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('first_name', 'last_name')

class CapeBookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BookSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ( 'name', 'price')