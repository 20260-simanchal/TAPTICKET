from flask import Flask
from flask_cors import CORS

from flask_jwt_extended import JWTManager
from flask_restful import Api
import json
from bson import ObjectId 


api = Api()

class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config["JWT_SECRET_KEY"] = "OWN-SECRET-KEY-SAMPLE"

    api.json_encoder = MyEncoder

    app.config['RESTFUL_JSON'] = {'cls': MyEncoder}



    jwt = JWTManager(app)

    CORS(app)

    ## Home
    from .home import Home,Review,Signup,Login,TicketBook,TicketSale,Contact


    api.add_resource(Home, "/", endpoint="Home")

    api.add_resource(Review, "/review", endpoint="Review")

    api.add_resource(Signup, "/signup", endpoint="Signup")

    api.add_resource(Login, "/login", endpoint="Login")

    api.add_resource(TicketBook, "/ticketbook", endpoint="TicketBook")

    api.add_resource(TicketSale, "/ticketsale", endpoint="TicketSale")

    # api.add_resource(Review, "/review", endpoint="Review")

    api.add_resource(Contact, "/contact", endpoint="Contact")




    ## Auth (Login, Logout, Register)
    ## ----------
    from root.auth import auth_bp

    app.register_blueprint(auth_bp)

    ## Dashboard
    ## ----------
    from root.dashboard import dashboard_bp

    app.register_blueprint(dashboard_bp)

    ## Sample
    ## ----------
    from root.sample import sample_bp

    app.register_blueprint(sample_bp)

    api.init_app(app)

    return app
