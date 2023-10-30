
class Project:
    def __init__(self, title, url_image, description, url_github, languages_used, url_app=None):
        self.title = title
        self.url_image = url_image
        self.description = description
        self.url_github = url_github
        self.languages_used = languages_used
        self.url_app = url_app if url_app else url_github