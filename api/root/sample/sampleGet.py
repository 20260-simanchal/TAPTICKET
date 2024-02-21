from flask_restful import Resource
from root.auth.utils import auth_required
from root.db import get_mongo_db

mdb = get_mongo_db()

class SampleGetRoute(Resource):
    def get(self):
        users = []  # Initialize the users list

        for item in mdb.users.find({}):
            users.append(item)

        return {
            "status": 1,
            "cls": "success",
            "msg": "Success",
            "payload": {
               "users": users,
            },
        }
    

class SampleGetRoute(Resource):
    def get(self):
        ticketbook = []  # Initialize the users list

        for item in mdb.ticketbook.find({}):
            ticketbook.append(item)

        return {
            "status": 1,
            "cls": "success",
            "msg": "Success",
            "payload": {
               "users": ticketbook,
        },
}
    

class SampleGetRoute(Resource):
    def get(self):
        ticketsale = []  # Initialize the users list

        for item in mdb.ticketsale.find({}):
            ticketsale.append(item)

        return {
            "status": 1,
            "cls": "success",
            "msg": "Success",
            "payload": {
               "users": ticketsale,
        },
}
    




class SampleGetRoute(Resource):
    def get(self):
        review = []  # Initialize the users list

        for item in mdb.review.find({}):
            review.append(item)

        return {
            "status": 1,
            "cls": "success",
            "msg": "Success",
            "payload": {
               "users": review,
        },
}



class SampleGetRoute(Resource):
    def get(self):
        contact = []  # Initialize the users list

        for item in mdb.contact.find({}):
            contact.append(item)

        return {
            "status": 1,
            "cls": "success",
            "msg": "Success",
            "payload": {
               "users": contact,
        },
}
