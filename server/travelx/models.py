from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.validators import RegexValidator



# !Destination Model 
class Destination(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
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
    



# ! Destination Images 
class DestinationImage(models.Model):
    image=models.ImageField(upload_to="destination/")
    destination=models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='images'
    )


    def __str__(self) -> str:
        """  
        String Representation For Destination Image Model 
        """
        return f"Image for {self.destination.title}"




# ! Destination Booking Model 
class Booking(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    contact_no = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(r'^\d{10}$', 'Contact number must be exactly 10 digits and numeric.'),
        ]
    )
    group_size = models.CharField(max_length=255)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    destination = models.ForeignKey(
        Destination,
        on_delete=models.PROTECT,
        related_name='bookings'
    )


    def __str__(self) -> str:
        """
        String Representation of the Booking
        """
        return f"Booking by {self.fullname} on {self.date}"
    



# ! Destination Inclusion Model 
class Inclusion(models.Model):
    title=models.CharField(max_length=255)
    destination=models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='inclusions'
    )


    def __str__(self) -> str:
        """
        String Representation of the Inclustion Of Destination
        """
        return self.title
    



# ! Destination Exclusion Model 
class Exclusion(models.Model):
    title=models.CharField(max_length=255)
    destination=models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='exclusions'
    )


    def __str__(self) -> str:
        """
        String Representation of the Inclustion Of Exclusion
        """
        return self.title
    



# ! Itinerary Model 
class Itinerary(models.Model):
    day_number = models.PositiveIntegerField()
    title = models.CharField(max_length=255)
    description = models.TextField()
    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='itineraries'
    )


    def __str__(self) -> str:
        """
        String Representation for Itinerary Model 
        """
        return f"Day {self.day_number}: {self.title}"




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
        String Representation of the Contact Model 
        """
        return f"{self.fullname}-{self.subject}"
    



# ! About Us  Model 
class AboutUs(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    image=models.ImageField(upload_to='about_us/')


    def __str__(self) -> str:
        """
        String Representation of the AboutUs Model
        """
        return self.title




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
    site_name=models.CharField(max_length=255)
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


    
    
