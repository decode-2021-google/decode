from flask import Flask, jsonify, request

app = Flask(__name__)


embedded_youtube_video_template = '<iframe width="{width}" height="{height}" src="https://www.youtube.com/embed/{video_code}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


@app.route('/test/get', methods=['GET'])
def search_form():
    return jsonify({'text': 'successful'}), 200


def get_random_youtube_code(category):
    return {'video_code': '5qap5aO4i9A', 'video_length': 0}


@app.route('/embedded/youtube', methods=['GET'])
def get_youtube_embed():
    category = request.args.get('category', default='random')

    video_width = request.args.get('video_width', default='560')
    video_height = request.args.get('video_height', default='315')

    youtube_dict = get_random_youtube_code(category)

    return jsonify({'embed_link': embedded_youtube_video_template.format(width=video_width, height=video_height, video_code=youtube_dict['video_code']), 'video_length': youtube_dict['video_length']}), 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
