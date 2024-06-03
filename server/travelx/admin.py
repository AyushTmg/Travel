from django.contrib import admin
from .models import( 
    Destination,
    Gallery, 
    Contact, 
    AboutUs, 
    Testimonial, 
    Blog, 
    SiteSetting, 
    Banner
)



# ! Destination Management Admin 
@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = [
        'title', 
        'price', 
        'duration', 
        'group_size', 
        'location', 
        'image'
    ]
    search_fields = ['title', 'location','group_size']
    list_filter = ['show_in_home']



# ! Gallery Images Management Admin 
@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title']





# ! Contact Management Admin
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = [
        'fullname',
        'email',
        'contact_no', 
        'subject',
        'date'
    ]
    search_fields = [
        'fullname',
        'email', 
        'subject'
    ]




# ! About Us Management Admin 
@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title']




# ! Testimonials Management Admin
@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['fullname', 'designation']
    search_fields = ['fullname', 'designation']




# !Blog Management Admin 
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['title', 'show_in_home']
    search_fields = ['title']
    list_filter = ['show_in_home']




# ! Site Setting Managemet Admin 
@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = [
        'site_logo',
        'contact_no', 
        'email',
        'landline',
        'fav_icon',
        'address',
        'map_link',
        'fb_link',
        'instagram_link',
        'linkedin_link',
        'twitter_link'
    ]

    



# ! Banner Management Admin 
@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display=[
        'title',
    ]
    list_filter=['title']