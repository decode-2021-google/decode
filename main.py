from flask import Flask, jsonify, request
from api.embedded_templates import *


app = Flask(__name__)


@app.route('/test/get', methods=['GET'])
def test_get():
    return jsonify({'text': 'successful'}), 200


def get_random_youtube_code(category):
    return {'video_code': '5qap5aO4i9A', 'video_length': 0}


@app.route('/embed/youtube', methods=['GET'])
def get_youtube_embed():
    # user_id = request.args.get('user_id')
    category = request.args.get('category', default='random')
    ended_early = request.args.get('ended_early', default='False')  # If the user skips the content before the timer runs out

    youtube_dict = get_random_youtube_code(category)

    embed_link = embedded_youtube_video_template.format(video_code=youtube_dict['video_code'])

    return jsonify({'embed_link': embed_link, 'video_length': youtube_dict['video_length']}), 200


def get_random_twitch_channel(category):
    return 'sykkuno'  # TODO: Create some randomness later


def get_random_twitch_video(category):  # Not sure if anyone watches these tbh, not easily searchable
    return {'video_code': '', 'video_length': 0}  # TODO: Create some randomness later


def get_random_twitch_clip(category):
    return {'video_code': 'BashfulHelpfulSalamanderPrimeMe', 'video_length': 23}  # TODO: Create some randomness later


@app.route('/embed/twitch', methods=['GET'])
def get_twitch_embed():
    # user_id = request.args.get('user_id')
    category = request.args.get('category', default='random')
    ended_early = request.args.get('ended_early', default='False')  # If the user skips the content before the timer runs out

    get_twitch_clip = True  # TODO: Create some randomness later

    # Might not want twitch streams since it's a larger requirement to see if they are online
    #if get_twitch_stream:
    #    twitch_channel = get_random_twitch_channel(category)
    #    embed_link = embedded_youtube_video_template.format(width=video_width, height=video_height, video_code=twitch_channel)
    #    video_length = 0

    if get_twitch_clip:
        twitch_dict = get_random_twitch_clip(category)

        embed_link = embedded_twitch_clip_template.format(video_code=twitch_dict['video_code'])
        video_length = twitch_dict['video_length']
    else:
        twitch_dict = get_random_twitch_video(category)

        embed_link = embedded_twitch_video_template.format(video_code=twitch_dict['video_code'])
        video_length = twitch_dict['video_length']

    return jsonify({'embed_link': embed_link, 'video_length': video_length}), 200


@app.route('/rate/thumbs', methods=['PUT'])
def rate_video():
    # user_id = request.args.get('user_id')
    rating = request.args.get('rating', default=0)

    # TODO: Send rating to db


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)