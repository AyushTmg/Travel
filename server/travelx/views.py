from .tasks import send_contact_mail_task
from utils.response.response import CustomResponse as cr 
from utils.exception.exception import CustomException as ce
from .models import (
    Destination,
    Gallery,
    AboutUs,
    SiteSetting,
    Booking,
    Banner,
    Testimonial,
    Blog,
)
from .serializers import (
    DestinationListSerializer,
    DestinationDetailSerializer,
    GallerylistSerializer,
    AboutUsSerializer,
    SiteSettingSerializer,
    BannerSerializer,
    TestimonialListSerializer,
    BlogListSerializer,
    BlogDetailSerializer,
    ContactSerializer,
    BookingSerializer

)


from django.http import Http404 


from rest_framework.views import APIView
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND
)
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
)




# ! Destination  List View 
class DestinationListView(ListAPIView):
    queryset=(
        Destination.objects
        .filter(is_active=True)
        .prefetch_related('images')
    )
    serializer_class=DestinationListSerializer


    def list(self, request, *args, **kwargs):
        """
        Over riding the method for custom response and retrieving 
        related banner 
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        try:
            banner=(
                Banner.objects
                .filter(is_active=True)
                .get(title='destination')
            )
            banner_serializer=BannerSerializer(banner)
        except Banner.DoesNotExist:
            raise ce(
                message="Banner Image Doesn't Exist"
            )
        
        data={
            'banner':banner_serializer.data,
            'destination':serializer.data,
        }

        return cr.success(
            data=data
        )
    



#! Destination Detail View 
class DestinationDetailView(RetrieveAPIView):
    queryset=(
        Destination.objects
        .filter(is_active=True)
        .prefetch_related(
        'images',
        'inclusions',
        'exclusions',
        'itineraries'
        )
    )
    serializer_class=DestinationDetailSerializer
    lookup_field='pk'


    def retrieve(self, request, *args, **kwargs):
        """
        Over riding the method for custom response 
        """
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return cr.success(
            data=serializer.data
        )
    
    
    def get_object(self):
        """
        Override get_object to handle non-existing objects
        """
        try:
            return super().get_object()
        except Http404:
            raise ce(
                message="Page Not found",
                status=HTTP_404_NOT_FOUND
            )
    



# ! Destination Booking View 
class DestinationBookingView(CreateAPIView):
    queryset=Booking.objects.all()
    serializer_class=BookingSerializer


    def create(self, request, *args, **kwargs):
        """
        Over riding the method for custom response  and 
        custom exception and also passing seriaizer context
        """
        destination_pk=self.kwargs['pk']

        try:
            destination = Destination.objects.get(pk=destination_pk)
        except Destination.DoesNotExist:
            raise ce(
                message="Destination You're trying to book doesn;t exits",
                status=HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(
            data=request.data,
            context={
            'destination_pk':destination_pk
            }
        )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return cr.success(
            status=HTTP_201_CREATED,
            message="We have received your booking \n We will contact you soon "
        )




# ! Gallery List View 
class GalleryListView(ListAPIView):
    queryset=Gallery.objects.filter(is_active=True)
    serializer_class=GallerylistSerializer


    def list(self, request, *args, **kwargs):
        """
        Over riding the method for custom response  and retrieving 
        related banner 
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        try:
            banner=(
                Banner.objects
                .filter(is_active=True)
                .get(title='gallery')
            )
            banner_serializer=BannerSerializer(banner)
        except Banner.DoesNotExist:
            raise ce(
                message="Banner Image Doesn't Exist"
            )
        
        data={
            'banner':banner_serializer.data,
            'gallery':serializer.data,
        }

        return cr.success(
            data=data
        )
    



# ! AboutUs View 
class AboutUsView(APIView):
    queryset = (
        AboutUs.objects
        .filter(is_active=True)
        .first()
    )
    serializer_class = AboutUsSerializer

    def get(self,request):
        """
        Using get method for custom response  and retrieving 
        related banner 
        """
        try:
            serializer = self.serializer_class(self.queryset)
            try:
                banner=(
                    Banner.objects
                    .filter(is_active=True)
                    .get(title='about_us')
                )
                banner_serializer=BannerSerializer(banner)
            except Banner.DoesNotExist:
                raise ce(
                    message="Banner Image Doesn't Exist"
                )
            
            data={
                'banner':banner_serializer.data,
                'about_us':serializer.data,
            }

            return cr.success(
                data=data
            )
        
        except Exception as e:
            return cr.error(
                message=f"Some error occured {e}"
            )
        



# ! SiteSetting View 
class SiteSettingView(APIView):
    queryset=(
        SiteSetting.objects
        .filter(is_active=True)
        .first()
    )
    serializer_class=SiteSettingSerializer


    def get(self,request):
        try:
            serializer= self.serializer_class(self.queryset)
            return cr.success(
                data=serializer.data
            )
            
        except Exception as e:
            return cr.error(
                message=f"Some error occured {e}"
            )

    


# ! Testimonial View 
class TestimonialListView(ListAPIView):
    queryset=Testimonial.objects.filter(is_active=True)
    serializer_class=TestimonialListSerializer


    def list(self, request, *args, **kwargs):
        """
        Over riding the method for custom response 
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return cr.success(
            data=serializer.data
        )




# ! Blog List View 
class BlogListView(ListAPIView):
    queryset= Blog.objects.filter(is_active=True)
    serializer_class=BlogListSerializer


    def list(self, request, *args, **kwargs):
        """
        Over riding the method for custom response 
        """
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        try:
            banner=(
                Banner.objects
                .filter(is_active=True)
                .get(title='blog')
            )
            banner_serializer=BannerSerializer(banner)
        except Banner.DoesNotExist:
            raise ce(
                message="Banner Image Doesn't Exist"
            )
        
        data={
            'banner':banner_serializer.data,
            'blogs':serializer.data,
        }

        return cr.success(
            data=data
        )




# ! Blog Detail View 
class BLogDetailView(RetrieveAPIView):
    queryset=Blog.objects.filter(is_active=True)
    serializer_class=BlogDetailSerializer
    lookup_field='pk'


    def retrieve(self, request, *args, **kwargs):
        """
        Over riding the retrieve method for custom response 
        """
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return cr.success(
            data=serializer.data
        )


    def get_object(self):
        """
        Override get_object to handle non-existing objects
        """
        try:
            return super().get_object()
        except Http404:
            raise ce(
                message="Page Not found",
                status=HTTP_404_NOT_FOUND
            )
    



# ! Contact View 
class ContactView(APIView):

    def get(self, request):
        """  
        Method For Retreieving Banner Image And Returing Custom Response
        """
        try:
            banner = (
                Banner.objects
                .filter(is_active=True)
                .get(title='contact')
            )
            banner_serializer = BannerSerializer(banner)
            data = {
                'banner': banner_serializer.data,
            }
            return cr.success(
                data=data
            )
        except Banner.DoesNotExist:
            raise ce(
                message= "Banner Image Doesn't Exist"
            )
        

    def post(self, request):
        """  
        Method For Posting Contact Detail And Returing Custom Response
        """
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                'fullname': serializer.validated_data.get('fullname'),
                'contact_no': serializer.validated_data.get('contact_no'),
                'email': serializer.validated_data.get('email'),
                'subject': serializer.validated_data.get('subject'),
                'message': serializer.validated_data.get('message'),
            }
            # ! calling celery task 
            send_contact_mail_task.delay(data)
            return cr.success(
                message= "We've received your message. We will contact you soon"
                )
        raise ce(
                message="Form Data Invalid"
            )



