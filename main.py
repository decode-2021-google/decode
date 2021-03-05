from flask import Flask, jsonify, request, abort
from api.embedded_templates import *
from api.db import Connection

app = Flask(__name__)
categories = []

conn = Connection(user='pomodoro')


@app.route('/test/get', methods=['GET'])
def test_get():
    return jsonify({'text': 'successful'}), 200


def get_random_youtube_code(category):
    return {'activity_id': 0, 'video_code': '5qap5aO4i9A', 'video_length': 0}


def get_youtube_embed(category):
    youtube_dict = get_random_youtube_code(category)

    embed_link = embedded_youtube_video_template.format(video_code=youtube_dict['video_code'])

    return jsonify({'activity_id': youtube_dict['activity_id'], 'embed_link': embed_link, 'video_length': youtube_dict['video_length']}), 200


def get_random_twitch_channel(category):
    return 'sykkuno'  # TODO: Create some randomness later


def get_random_twitch_video(category):  # Not sure if anyone watches these tbh, not easily searchable
    return {'activity_id': 1, 'video_code': '', 'video_length': 0}  # TODO: Create some randomness later


def get_random_twitch_clip(category):
    return {'activity_id': 2, 'video_code': 'BashfulHelpfulSalamanderPrimeMe', 'video_length': 23}  # TODO: Create some randomness later


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

    return activity_id, embed_link, video_length


@app.route('/get_content', methods=['GET'])
def get_content():
    # user_id = request.args.get('user_id')

    category = 'random'

    activity_id, embed_link, video_length = get_twitch_embed(category)  # TODO: This would be replaced with a db request based on the category

    return jsonify({'activity_id': 0, 'embed_link': embed_link, 'video_length': video_length}), 200


@app.route('/rate', methods=['PUT'])
def rate_content():
    user_id = request.args.get('user_id', -1)
    activity_id = request.args.get('activity_id', -1)
    rating = request.args.get('rating', default='neutral')

    if user_id == -1 or activity_id == -1:
        abort(406)

    static_modifier = 2  # How much the efficiency score changes

    sql = conn.read_file('api/sql_scripts/change_rating.sql')
    filled_sql = sql.format(feedback=rating, activity_id=activity_id, user_id=user_id, modifier=static_modifier)

    conn.execute(filled_sql)

    return {'text': 'Successful'}, 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
