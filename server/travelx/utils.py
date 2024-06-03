from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings




class Util:
    @staticmethod
    def send_contact_mail(data):
        """
        For Sending Contacted Email to Owner
        """
        try:
            fullname=data['fullname']
            contact_no=data['contact_no']
            subject = data['subject']
            contact_message=data['message']
            email=data['email']

            # ! For passing context in the template for email
            context={
                'fullname':fullname,
                'contact_no':contact_no,
                'email':email,
                'message':contact_message
                }

            message=render_to_string('emails/contact_mail.html',context)
            send_mail(subject, '', settings.DEFAULT_FROM_EMAIL, [settings.OWNER_EMAIL],html_message=message)

        except Exception as e:
            print(f"Some Error occrured during sending email {e}")

