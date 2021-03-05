from flask import Flask, jsonify, request
from embedded_templates import *


app = Flask(__name__)


@app.route('/test/get', methods=['GET'])
def search_form():
    return jsonify({'text': 'successful'}), 200


def clean_template(template):
    return template.replace(' ', '').replace('\n', '')


def get_random_youtube_code(category):
    return {'video_code': '5qap5aO4i9A', 'video_length': 0}


@app.route('/embed/youtube', methods=['GET'])
def get_youtube_embed():
    category = request.args.get('category', default='random')

    video_width = request.args.get('video_width', default='560')
    video_height = request.args.get('video_height', default='315')

    youtube_dict = get_random_youtube_code(category)

    video_template = clean_template(embedded_youtube_video_template)
    embed_link = video_template.format(width=video_width, height=video_height, video_code=youtube_dict['video_code'])

    return jsonify({'embed_link': embed_link, 'video_length': youtube_dict['video_length']}), 200


def get_random_twitch_channel(category):
    return 'sykkuno'  # TODO: Create some randomness later


def get_random_twitch_video(category):  # Not sure if anyone watches these tbh, not easily searchable
    return {'video_code': '', 'video_length': 0}  # TODO: Create some randomness later


def get_random_twitch_clip(category):
    return {'video_code': 'BashfulHelpfulSalamanderPrimeMe', 'video_length': 23}  # TODO: Create some randomness later


@app.route('/embed/twitch', methods=['GET'])
def get_twitch_embed():
    category = request.args.get('category', default='random')

    video_width = request.args.get('video_width', default='560')
    video_height = request.args.get('video_height', default='315')

    get_twitch_clip = True  # TODO: Create some randomness later

    # Might not want twitch streams since it's a larger requirement to see if they are online
    #if get_twitch_stream:
    #    twitch_channel = get_random_twitch_channel(category)
    #    embed_link = embedded_youtube_video_template.format(width=video_width, height=video_height, video_code=twitch_channel)
    #    video_length = 0

    if get_twitch_clip:
        twitch_dict = get_random_twitch_clip(category)

        clip_template = clean_template(embedded_twitch_clip_template)
        embed_link = clip_template.format(width=video_width, height=video_height, video_code=twitch_dict['video_code'])
        video_length = twitch_dict['video_length']
    else:
        twitch_dict = get_random_twitch_video(category)

        video_template = clean_template(embedded_twitch_video_template)
        embed_link = video_template.format(width=video_width, height=video_height, video_code=twitch_dict['video_code'])
        video_length = twitch_dict['video_length']

    return jsonify({'embed_link': embed_link, 'video_length': video_length}), 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
