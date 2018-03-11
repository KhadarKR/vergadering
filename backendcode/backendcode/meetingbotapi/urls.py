from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *


# bot_router = routers.DefaultRouter()
# bot_router.register(
#     r'^employee/$', EmployeeCreateView.as_view(), "create")
# bot_router.register(r'^employee/(?P<pk>[0-9]+)/$', EmployeeDetailsView.as_view(), "details")
# bot_router.register(r'^meeting/$', MeetingCreateView.as_view(),"create")
# bot_router.register(r'^meeting/(?P<pk>[0-9]+)/$', MeetingDetailView.as_view(), "details")
urlpatterns = {
    url(r'^employee/$', EmployeeCreateView.as_view(), name="create"),
    url(r'^employee/(?P<pk>[0-9]+)/$', EmployeeDetailsView.as_view(), name="details"),
    url(r'^meeting/$', MeetingCreateView.as_view(), name="create"),
    url(r'^meeting/(?P<pk>[0-9]+)/$', MeetingDetailView.as_view(), name="details"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
