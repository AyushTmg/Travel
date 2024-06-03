from .models import (
    Destination,
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



# !Serializer For Listing Destination 
class DestinationListSerializer(ModelSerializer):
    class Meta:
        model=Destination
        fields=[
            'id',
            'title',
            'image',
        ]




# !Serializer For Showing Destination Detail 
class DestinationDetailSerializer(ModelSerializer):
    class Meta:
        model=Destination
        fields=[
            'id',
            'title',
            'image',
            'price',
            'description',
            'duration',
            'group_size',
            'location',
            'show_in_home'
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




# ! Serailizer For Listing Testimonial
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




# ! Serailizer For Contact 
class ContactSerailizer(ModelSerializer):       
    date= serializers.DateField(read_only=True)
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