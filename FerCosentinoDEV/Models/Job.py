
class Job:
    def __init__(self, company_name, location, position, tasks=[]):
        self.company_name = company_name
        self.location = location
        self.position = position
        self.tasks = tasks