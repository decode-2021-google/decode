from flask_testing import TestCase

import app  # Import flask app


class TestEndpoints(TestCase):
    def create_app(self):
        return app.APP

    def test_get_test(self):
        response = self.client.get("/test/get")

        self.assertEqual(response.json['text'], 'successful')
