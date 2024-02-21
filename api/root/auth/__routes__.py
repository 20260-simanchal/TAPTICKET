from root.auth.currentUser import CurrentUser
from root.auth.login import Login, SaveUser
from . import auth_api
from root.auth.signup import UserSignupForm
from root.auth.ticketbook import UserTicketBookForm
from root.auth.ticketsale import UserTicketSaleForm
from root.auth.review import UserReviewForm
from root.auth.contact import UserContactForm



auth_api.add_resource(Login, "/login")
auth_api.add_resource(CurrentUser, "/user")
auth_api.add_resource(SaveUser, "/save/user")


auth_api.add_resource(UserSignupForm, "/user/signup")

auth_api.add_resource(UserTicketBookForm, "/user/ticketbook")

auth_api.add_resource(UserTicketSaleForm, "/user/ticketsale")

auth_api.add_resource(UserReviewForm, "/user/review")

auth_api.add_resource(UserContactForm, "/user/contact")
