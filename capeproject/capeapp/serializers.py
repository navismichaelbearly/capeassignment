from rest_framework import serializers
from capeapp.models import Book
from capeapp.models import Author

class BookSerializer(serializers.ModelSerializer):
    authors = serializers.PrimaryKeyRelatedField(queryset = Author.objects.all(), many=True)

    class Meta:
        model = Book
        fields = ('id', 'name', 'price', 'published_on', 'created_on', 'authors')


class AuthorSerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name', 'books')