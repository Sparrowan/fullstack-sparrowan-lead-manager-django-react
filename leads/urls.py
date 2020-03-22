from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads-list', LeadViewSet, 'leads')

urlpatterns = router.urls