embedded_youtube_video_template = \
    '''
        <iframe 
            width="{width}" 
            height="{height}" 
            src="https://www.youtube.com/embed/{video_code}" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
        </iframe>
    '''
embedded_rpan_video_template = '<video tabindex="-1" src="blob:https://www.reddit.com/fc8c6a17-edea-495c-b271-85877c483d14"></video>'  # No clue if this is real
embedded_twitch_channel_template = \
    '''
        <iframe
            src="https://player.twitch.tv/?channel={channel}&parent=google.com"
            height="{height}"
            width="{width}"
            allowfullscreen="false">
        </iframe>
    '''
embedded_twitch_video_template = \
    '''
        <iframe
            src="https://player.twitch.tv/?video={video_code}&parent=google.com"
            height="{height}"
            width="{width}"
            allowfullscreen="false">
        </iframe>
    '''
embedded_twitch_clip_template = \
    '''
        <iframe
            src="https://clips.twitch.tv/embed?clip={video_code}&parent=google.com"
            height="{height}"
            width="{width}"
            allowfullscreen="false">
        </iframe>
    '''