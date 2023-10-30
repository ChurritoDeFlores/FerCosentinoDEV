
class AcademicExperience:
    def __init__(self, institution, location, title, start_date, finish_date, knowledge_obtained=[], is_completed=False):
        self.institution = institution
        self.location = location
        self.title = title
        self.start_date = start_date
        self.finish_date = finish_date
        self.knowledge_obtained = knowledge_obtained
        self.is_completed = is_completed

    def status(self):
        if (self.is_completed):
            return "Completo"
        else:
            return "Incompleto"