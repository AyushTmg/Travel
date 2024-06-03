from .tasks import send_contact_mail_task
from utils.response.response import CustomResponse as cr 
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
from .serializers import (
    DestinationListSerializer,
    DestinationDetailSerializer,
    GallerylistSerializer,
    AboutUsSerializer,
    SiteSettingSerializer,
    BannerListSerializer,
    TestimonialListSerializer,
    BlogListSerializer,
    BlogDetailSerializer,
    ContactSerializer

)


from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED
from rest_framework.generics import(
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView
)




# ! Destination  List View 
class DestinationListView(ListAPIView):
    queryset=Destination.objects.all().prefetch_related('images')
    serializer_class=DestinationListSerializer


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return cr.success(
            data=serializer.data
        )
    



#! Destination Detail View 
class DestinationDetailView(RetrieveAPIView):
    queryset=Destination.objects.all().prefetch_related(
        'images',
        'inclusions',
        'exclusions',
        'itineraries'
        )
    serializer_class=DestinationDetailSerializer
    lookup_field='pk'


    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return cr.success(
            data=serializer.data
        )
    



# ! Gallery List View 
class GalleryListView(ListAPIView):
    queryset=Gallery.objects.all()
    serializer_class=GallerylistSerializer


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return cr.success(
            data=serializer.data
        )
    



# ! AboutUs View 
class AboutUsView(APIView):
    # queryset = AboutUs.objects.first()  
    serializer_class = AboutUsSerializer

    def get(self,request):
        try:
            serializer = self.serializer_class(self.queryset)
            return cr.success(
                data=serializer.data
            )
        
        except Exception as e:
            return cr.error(
                message=f"Some error occured {e}"
            )
        



# ! SiteSetting View 
class SiteSettingView(APIView):
    # queryset=SiteSetting.objects.first()
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




#! BannerList View 
class BannerListView(ListAPIView):
    queryset=Banner.objects.all()
    serializer_class=BannerListSerializer


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return cr.success(
            data=serializer.data
        )
    



# ! Testimonial View 
class TestimonialListView(ListAPIView):
    queryset=Testimonial.objects.all()
    serializer_class=TestimonialListSerializer


    def list(self, request, *args, **kwargs):
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
    queryset= Blog.objects.all()
    serializer_class=BlogListSerializer


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)

        return cr.success(
            data=serializer.data
        )




# ! Blog Detail View 
class BLogDetailView(RetrieveAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogDetailSerializer
    lookup_field='pk'


    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return cr.success(
            data=serializer.data
        )
    



# !Contact View 
class ContactView(CreateAPIView):
    queryset=Contact.objects.all()
    serializer_class=ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        validated_data = serializer.validated_data

        data = {
            'fullname': validated_data.get('fullname'),
            'contact_no': validated_data.get('contact_no'),
            'email': validated_data.get('email'),
            'subject': validated_data.get('subject'),
            'message': validated_data.get('message'),
        }
        
        self.perform_create(serializer)

        # ! calling celery task 
        send_contact_mail_task.delay(data)

        return cr.success(
            message="We've received your message. We will contact you soon",
            status=HTTP_201_CREATED
        )




