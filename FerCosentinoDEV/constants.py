from FerCosentinoDEV.Models.Job import Job
from FerCosentinoDEV.Models.AcademicExperience import AcademicExperience
from FerCosentinoDEV.Models.Project import Project


# URL redes sociales y contacto
URL_GITHUB="https://github.com/Dingras"
URL_INSTAGRAM = "https://www.instagram.com/fernan.cosent/"
URL_LINKEDIN = "https://www.linkedin.com/in/feracosentino/"


# Informacion personal
NAME = "Fernando Cosentino"
EMAIL = "feracosentino@gmail.com"
PERSONAL_DESCRIPTION = "Systems Analyst with a background in mechanical engineering and proficiency in hardware/software, programming,networking, and agile methodologies."
SKILLS = """Skills=[
    'Web Development',
    'Database Management',
    'Agile Methodologies',
    'Problem Solving',
    'Error Management',
    'Laboratory Skills',
    'Mathematics and Physics Proficiency',
    'Logical Thinking'
]"""
INTERESTING = """Interesting=[
    'Teamwork',
    'Travel',
    'Robotics/Automation',
    'SimRacing',
    'Motorsport',
    'BackEnd',
    'Database Management'
]"""

# Experiencia - Trabajos

JOB_SIMULADORES_EN_RED = Job('Simuladores en red', 'Mar del plata', 'Manager', ['Managed local area networks.','Administered online game servers.','Organized esports events.'])

# Educacion - Estudios obtenidos

EDU_ING_MECANICA = AcademicExperience('Facultad de Ingeniería UNMDP','Mar del Plata','Mechanical Engineering','2011', '2016',['Strong proficiency in mathematics, physics and logic.','Proficient in laboratory work and error management.'],False)
EDU_TECNICO_PC = AcademicExperience('Universidad Tecnológica Nacional UTN','Mar del Plata', 'Computer Repair, Maintenance, and Upgrades','April 2017','July 2017',['Technical knowledge, handling, and maintenance of software and hardware.'],True)
EDU_ANALISTA_DE_SISTEMAS = AcademicExperience('Instituto Argentino de la empresa Hilet','Mar del Plata','Systems Analyst','April 2021','December 2023',['Skills in programming, databases, agile methodologies, and network management.'],True)

# Proyectos

PROJECT_API_PYTODO =Project("PyToDo API", "swagger_ui.png", "API for user diary created with FastAPI", "https://github.com/Dingras/PyToDo", "Python")
PROJECT_APP_PYTODO = Project("PyToDo APP", "PyToDoAPP.png", "APP for user diary created with React", "https://github.com/Dingras/PyToDoReact", "JavaScript - CSS - React")
PROJECT_FLAPPY_BIRD = Project("Flappy Bird", "flappybird.jpg", "A videogame similar to Flappy Bird, created in Java", "https://github.com/Dingras/Java/tree/main/FlappyBird", "Java")
PROJECT_CALCULATOR = Project("Calculator", "calculadora.png", "Web application similar to iPhone calculator","https://github.com/Dingras/CalculadoraHTML", "HTML - CSS - JavaScript", "http://churritocalculador.somee.com/")
PROJECT_TELE_PONG = Project("Tele-Pong", "telepong.png", "TelePong video game made with C# using WinForm", "https://github.com/Dingras/TelePong", "C#")
PROJECT_MI_PORTAFOLIO = Project("Personal portfolio", "portfolio.png", "This web site created with Reflex", "https://github.com/Dingras/MiPortafolio", "Python")