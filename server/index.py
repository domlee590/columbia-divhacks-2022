import flask

# Create a new Flask app that responds to "/" with "Hello, World!"
app = flask.Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
