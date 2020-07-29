from rest_framework import routers
from .api import CapeAuthorViewSet
from .api import CapeBookViewSet

router = routers.DefaultRouter()
router.register('api/authors',CapeAuthorViewSet,'capes')
router.register('api/books',CapeBookViewSet,'capes')

urlpatterns = router.urls