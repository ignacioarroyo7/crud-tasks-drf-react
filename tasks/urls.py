from django.http import HttpResponse
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')

# Una vista simple para la raíz
def root_view(request):
    return HttpResponse("Bienvenido a la API de Tasks. Navega a /api/v1/ para usar la API.")

urlpatterns = [
    path('', root_view, name='tasks_root'),  # Maneja /tasks/
    path('api/v1/', include(router.urls)),  # Rutas de la API
    path('docs/', include_docs_urls(title='Task API')),  # Documentación
]
