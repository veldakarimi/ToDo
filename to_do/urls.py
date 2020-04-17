from .api import ListViewSet, CardViewSet
from rest_framework.routers import DefaultRouter
from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)


urlpatterns = router.urls
