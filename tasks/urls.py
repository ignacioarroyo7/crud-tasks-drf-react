from django.urls import path, include
from django.views.generic import RedirectView
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')

urlpatterns = [
    path('', RedirectView.as_view(url='api/v1/', permanent=True)),  # Redirige /tasks/ a /tasks/api/v1/
    path('api/v1/', include(router.urls)),  # Rutas de la API
    path('docs/', include_docs_urls(title='Task API')),  # Documentación
]
