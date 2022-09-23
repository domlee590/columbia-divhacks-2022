import json

import flask
from flask import request
from pymongo import MongoClient

# Create a new Flask app that responds to "/" with "Hello, World!"
app = flask.Flask(__name__)

client = MongoClient("mongodb+srv://user:test123@cluster0.qyhsfdv.mongodb.net/?retryWrites=true&w=majority")
print(client.list_database_names())
db = client["columbia-divhacks"]
collection_name = db["users"]


@app.route("/")
def ping():
    return "Pong!"


@app.route("/api/user/create", methods=["POST"])
def create_user():
    if get_user(request.get_json()["email"]) == "User not found":
        collection_name.insert_one(request.get_json())
    return "Success"


@app.route("/api/user/get")
def get_user(email=None):
    if email is None:
        email = request.get_json()["email"]
    user = collection_name.find_one({"email": email})
    if user is None:
        return "User not found"
    user.pop("_id")
    return json.dumps(user)


@app.route("/api/user/get-all")
def get_users():
    users = [user for user in collection_name.find()]
    for user in users:
        user.pop("_id")
    return json.dumps([user for user in users])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
