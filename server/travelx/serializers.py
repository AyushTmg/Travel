from .models import (
    Destination,
    DestinationImage,
    Inclusion,
    Exclusion,
    Itinerary,
    Booking,
    Gallery,
    AboutUs,
    SiteSetting,
    Banner,
    Testimonial,
    Blog,
    Contact
)


from rest_framework import serializers
from rest_framework.serializers import ModelSerializer 




# ! Serializer For Destination Image 
class DestinationImageSerializer(ModelSerializer):
    class Meta:
        model=DestinationImage
        fields=[
            'id',
            'image'
        ]




# ! Serializer For Inclusion 
class InclusionSerializer(ModelSerializer):
    class Meta:
        model=Inclusion
        fields=[
            'id',
            'title',
        ]




# ! Serializer For Exclusion 
class ExclusionSerializer(ModelSerializer):
    class Meta:
        model=Exclusion
        fields=[
            'id',
            'title',
        ]




#! Serializer For Itinerary 
class ItinerarySerializer(ModelSerializer):
    class Meta:
        model=Itinerary
        fields=[
            'id',
            'title',
            'description',
            'day_number',
        ]




# !Serializer For Listing Destination 
class DestinationListSerializer(ModelSerializer):
    images=DestinationImageSerializer(many=True)

    class Meta:
        model=Destination
        fields=[
            'id',
            'title',
            'images',
            'duration',
            'group_size',
            'location',
        ]




# !Serializer For Showing Destination Detail 
class DestinationDetailSerializer(ModelSerializer):
    images=DestinationImageSerializer(many=True)
    inclusions=InclusionSerializer(many=True)
    exclusions=ExclusionSerializer(many=True)
    itineraries=ItinerarySerializer(many=True)

    class Meta:
        model=Destination
        fields=[
            'id',
            'title',
            'images',
            'price',
            'description',
            'duration',
            'group_size',
            'location',
            'inclusions',
            'exclusions',
            'itineraries'
        ]




# !Serializer For Listing Gallery 
class GallerylistSerializer(ModelSerializer):
    class Meta:
        model=Gallery
        fields=[
            'id',
            'title',
            'image'
        ]




# !Serializer For About Us 
class AboutUsSerializer(ModelSerializer):
    class Meta:
        model=AboutUs
        fields=[
            'id',
            'title',
            'description',
            'image'
        ]




# !Serializer For SiteSetting 
class SiteSettingSerializer(ModelSerializer):
    class Meta:
        model=SiteSetting
        fields=[
            'id',
            'site_logo',
            'contact_no',
            'landline',
            'email',
            'fav_icon',
            'address',
            'map_link',
            'fb_link',
            'instagram_link',
            'linkedin_link',
            'twitter_link'
        ]




# !Serializer For Listing Banner 
class BannerListSerializer(ModelSerializer):
    class Meta:
        model=Banner 
        fields=[
            'id',
            'title',
            'image'
        ]




# ! Serializer For Listing Testimonial
class TestimonialListSerializer(ModelSerializer):
    class Meta:
        model=Testimonial
        fields=[
            'id',
            'fullname',
            'designation',
            'image',
            'show_in_home'
        ]




# !Serializer For Listing BLogs 
class BlogListSerializer(ModelSerializer):
    class Meta:
        model=Blog
        fields=[
            'id',
            'title',
            'image',
            'date',
            'show_in_home'

        ]




# !Serializer For Blog Detail 
class BlogDetailSerializer(ModelSerializer):
    class Meta:
        model=Blog
        fields=[
            'id',
            'title',
            'description',
            'image',
            'date',
        ]




# ! Serializer For Contact 
class ContactSerializer(ModelSerializer):       
    class Meta:
        model=Contact
        fields=[
            'id',
            'fullname',
            'email',
            'contact_no',
            'subject',
            'message',
            'date',
        ]




# ! Serializer For Booking Destination
class BookingSerializer(ModelSerializer):
    class Meta:
        model=Booking
        fields=[
            'id',
            'fullname',
            'contact_no',
            'group_size',
            'message',
            'date'
        ]