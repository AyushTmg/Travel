
import os 
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY =os.environ.get('SECRET_KEY')
DEBUG = True
ALLOWED_HOSTS = []


# ! PROJECT APPS
PROJECT_APPS=[
    'travelx'
]

# ! THIRD PARTY APPS 
THIRD_PARTY_APPS=[
    "debug_toolbar",
    'rest_framework',
    "corsheaders",
    "django_filters"

    
]

# ! INSTALLED APPS
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

INSTALLED_APPS+=PROJECT_APPS
INSTALLED_APPS+=THIRD_PARTY_APPS


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware", #! CORS MIDDLEWARE
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    "debug_toolbar.middleware.DebugToolbarMiddleware", #! DJANGP DEBUG TOOLBAR MIDDLEWARE
]


ROOT_URLCONF = 'main.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'main.wsgi.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# !CONFIGURATION'S FOR STATIC FILES
STATIC_URL = 'static/'
STATIC_ROOT=os.path.join(BASE_DIR,'static')


# !CONFIGURATION'S FOR MEDIA FILES
MEDIA_URL='media/'
MEDIA_ROOT=os.path.join(BASE_DIR,'media')


# ! CONFIGURATION'S FOR DJANGO DEBUG TOOLBAR
INTERNAL_IPS = [
    "127.0.0.1",
]


#! EMAIL CONFIGURATION'S
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER =os.environ.get('EMAIL')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_PASSWORD')
DEFAULT_FROM_EMAIL = os.environ.get('EMAIL')
OWNER_EMAIL= os.environ.get('OWNER_EMAIL')


# ! CELERY CONFIGURATION'S
CELERY_BROKER_URL='redis://127.0.0.1:6379/0'


# ! ALLOWING ORIGINS FOR CORS
CORS_ALLOW_ALL_ORIGINS = True