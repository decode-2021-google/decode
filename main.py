from flask import Flask, jsonify, request, abort
from api.embedded_templates import *
from api.db_models import User

app = Flask(__name__)
categories = []

@app.route('/test/query', methods=['GET'])
def test_query():
    uid = request.args.get('user_id', '0')
    u = User(uid)
    q = u.get_activity('youtube')
    return jsonify({'query_results': q}), 200


@app.route('/test/get', methods=['GET'])
def test_get():
    return jsonify({'text': 'successful'}), 200


def get_random_youtube_code(category):
    return {'activity_id': 0, 'content_type': 'youtube', 'video_code': '5qap5aO4i9A', 'video_length': 0}


def get_youtube_embed(category):
    youtube_dict = get_random_youtube_code(category)

    embed_link = embedded_youtube_video_template.format(video_code=youtube_dict['video_code'])
    content_type = youtube_dict['content_type']

    return jsonify({'activity_id': youtube_dict['activity_id'], 'content_type': content_type, 'embed_link': embed_link, 'video_length': youtube_dict['video_length']}), 200


def get_random_twitch_channel(category):
    return 'sykkuno'  # TODO: Create some randomness later


def get_random_twitch_video(category):  # Not sure if anyone watches these tbh, not easily searchable
    return {'activity_id': 1, 'content_type': 'twitch', 'video_code': '', 'video_length': 0}  # TODO: Create some randomness later


def get_random_twitch_clip(category):
    return {'activity_id': 2, 'content_type': 'twitch', 'video_code': 'BashfulHelpfulSalamanderPrimeMe', 'video_length': 23}  # TODO: Create some randomness later


def get_twitch_embed(category):
    get_twitch_clip = True  # TODO: Create some randomness later

    # Might not want twitch streams since it's a larger requirement to see if they are online
    #if get_twitch_stream:
    #    twitch_channel = get_random_twitch_channel(category)
    #    embed_link = embedded_youtube_video_template.format(width=video_width, height=video_height, video_code=twitch_channel)
    #    video_length = 0

    if get_twitch_clip:
        twitch_dict = get_random_twitch_clip(category)

        embed_link = embedded_twitch_clip_template.format(video_code=twitch_dict['video_code'])
    else:
        twitch_dict = get_random_twitch_video(category)

        embed_link = embedded_twitch_video_template.format(video_code=twitch_dict['video_code'])

    video_length = twitch_dict['video_length']
    activity_id = twitch_dict['activity_id']
    content_type = twitch_dict['content_type']

    return activity_id, content_type, embed_link, video_length


@app.route('/api/get_categories', methods=['GET'])
def get_categories():
    return jsonify({'categories': categories}), 200


@app.route('/api/set_user_categories', methods=['PUT'])
def set_categories():


    return {'text': 'successful'}, 200


@app.route('/api/get_content', methods=['GET'])
def get_content():
    user_id = request.args.get('user_id')
    u = User(user_id)
    act = u.get_random_activity()
    print(act[0])
    # activity_id, embed_link, video_length = get_twitch_embed(category)  # TODO: This would be replaced with a db request based on the category

    return jsonify({'activity':act}), 200



@app.route('/api/rate', methods=['PUT'])
def rate_content():
    user_id = request.args.get('user_id', -1)
    activity_id = request.args.get('activity_id', -1)
    rating = request.args.get('rating', default='neutral')

    if user_id == -1 or activity_id == -1:
        abort(406)

    user = User(user_id)
    user.update_score(activity_id, rating)
    return {'text': 'Successful'}, 200


@app.route('/api/add_user', methods=['PUT'])
def add_userid():
    user_id = request.json['user_id'] if 'user_id' in request.json else -1
    if user_id == -1:
        abort(406)
    User.add_userid(user_id)
    return {'text': 'Successful'}, 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
