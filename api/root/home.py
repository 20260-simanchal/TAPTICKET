from flask_restful import Resource


class Home(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 1,
            "class": "success",
            "message": "Success",
            "payload": {},
        }



class Review(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 2,
            "class": "success",
            "message": "Success",
            "payload": {},
        }
    

class Signup(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 3,
            "class": "success",
            "message": "Success",
            "payload": {},
        }
    
class Login(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 4,
            "class": "success",
            "message": "Success",
            "payload": {},
        }
    


class TicketBook(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 5,
            "class": "success",
            "message": "Success",
            "payload": {},
        }
    


class TicketSale(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 6,
            "class": "success",
            "message": "Success",
            "payload": {},
        }
    



class Review(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 7,
            "class": "success",
            "message": "Success",
            "payload": {},
        }


class Contact(Resource):
    def get(self):
        print('get: ')
        return {
            "status": 8,
            "class": "success",
            "message": "Success",
            "payload": {},
        }