from .utils import Util
from celery import shared_task



@shared_task(name="send_contact_mail_task")
def send_contact_mail_task(data):
    try:
        # ! method called to send mail to owner about being contacted
        Util.send_contact_mail(data)
    except Exception as e:
        # ! For Dubugging purpose
        print(f"Some error on task.py {e}")

