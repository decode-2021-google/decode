from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/test/get', methods=['GET'])
def search_form():
  return jsonify({'text': 'successful', 
                  'auto_deploy': 'successful',
                  'auto_deploy_for_real_this_time': 'successful',}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
