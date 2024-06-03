from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError




# !Custom Validation Method 
def validate_exact_length(value):
        """
        Custom Validation Function to validate the length 
        """
        if len(value) != 10:
            raise ValidationError('Contact number must be exactly 10 digits.')




# !Destination Model 
class Destination(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField(upload_to="destination/")
    price=models.IntegerField(
        validators=[MinValueValidator(50)]
    )
    duration=models.CharField(max_length=150)
    group_size=models.CharField(max_length=150)
    location=models.CharField(max_length=255)
    show_in_home=models.BooleanField(default=False)


    def __str__(self) -> str:
        """
        String Representation of the Destination
        """
        return self.title
    





# ! Gallery Model
class Gallery(models.Model):
    title=models.CharField(max_length=255)
    image=models.ImageField(upload_to='gallery_image/')

    
    def __str__(self) -> str:
        """
        String Representation of the Gallery
        """
        return self.title




# ! Contact Model 
class Contact(models.Model):
    fullname=models.CharField(max_length=255)
    email=models.EmailField()
    contact_no = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(r'^\d{10}$', 'Contact number must be exactly 10 digits and numeric.'),
        ]
    )
    subject=models.CharField(max_length=255)
    message=models.TextField()
    date=models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        """
        String Representation of the Contact
        """
        return self.fullname
    






# ! About Us  Model 
class AboutUs(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField(upload_to='about_us/')




# ! Testimonial Model 
class Testimonial(models.Model):
    fullname=models.CharField(max_length=255)
    designation=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField(upload_to='testimonial/')
    show_in_home=models.BooleanField(default=False)


    def __str__(self) -> str:
        """
        String Representation of the Testimonial
        """
        return self.fullname
    



# ! Blog Model 
class Blog(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField(upload_to='blog/')
    show_in_home=models.BooleanField(default=False)
    date=models.DateField(auto_now_add=True)



    def __str__(self) -> str:
        """
        String Representation of the Blog
        """
        return self.title 
    



# ! Site Settings Model 
class SiteSetting(models.Model):
    site_logo=models.ImageField(upload_to='site')
    contact_no = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(r'^\d{10}$', 'Contact number must be exactly 10 digits'),
        ]
    )
    landline=models.IntegerField(blank=True, null=True)
    email=models.EmailField()
    fav_icon=models.ImageField(upload_to='site')
    address=models.CharField(max_length=255)
    map_link=models.CharField(max_length=255)
    fb_link=models.CharField(max_length=255,blank=True,null=True)
    instagram_link=models.CharField(max_length=255,blank=True,null=True)
    linkedin_link=models.CharField(max_length=255,blank=True,null=True)
    twitter_link=models.CharField(max_length=255,blank=True,null=True)




# ! Banner Model
class Banner(models.Model):
    title=models.CharField(max_length=255)
    image=models.ImageField(upload_to='banner/')


    def __str__(self) -> str:
        """
        String Representation of the Banner
        """
        return self.title 


    
    
