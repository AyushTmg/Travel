from django.urls import path 

from .views import (
    DestinationListView,
    DestinationDetailView,
    GalleryListView,
    AboutUsView,
    SiteSettingView,
    BannerListView,
    TestimonialListView,
    BlogListView,
    BLogDetailView,
    ContactView,
    DestinationBookingView

)


urlpatterns = [
    path('destinations/',DestinationListView.as_view(),name="destination-list"),
    path('destinations/<str:pk>/',DestinationDetailView.as_view(),name='destination-detail'),
    path('destinations/<str:pk>/bookings/',DestinationBookingView.as_view(),name='destination-booking'),
    path('gallery/',GalleryListView.as_view(),name="gallery-list"),
    path('about_us/',AboutUsView.as_view(),name="about-us"),
    path('site_setting/',SiteSettingView.as_view(),name="site-setting"),
    path('banner/',BannerListView.as_view(),name="banner-list"),
    path('testimonial/',TestimonialListView.as_view(),name='testimonial-list'),
    path('blogs/',BlogListView.as_view(),name='blog-list'),
    path('blogs/<str:pk>/',BLogDetailView.as_view(),name='blog-detail'),
    path('contact_us/',ContactView.as_view(),name="contact-us")
]