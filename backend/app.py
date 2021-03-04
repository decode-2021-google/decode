from flask import Flask, jsonify

APP = Flask(__name__)


@APP.route('/test/get', methods=['GET'])
def search_form():
    return jsonify({'text': 'successful'}), 200


if __name__ == '__main__':
    APP.run(debug=True)
