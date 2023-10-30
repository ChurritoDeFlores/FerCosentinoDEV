import reflex as rx
# Componentes
from FerCosentinoDEV.Components.navbar import navbar
# Vistas
from FerCosentinoDEV.Views.personal_info import personal_info
from FerCosentinoDEV.Views.projects import projects
from FerCosentinoDEV.Views.contact import contact
#Propiedades de Colores
from FerCosentinoDEV.Styles.colors import Color
import FerCosentinoDEV.Styles.styles as Styles
from FerCosentinoDEV.Styles.fonts import Font

class State(rx.State):
    pass

def index() -> rx.Component:
    return  rx.vstack(
                navbar(),
                rx.box(width="100%",height="83px",bg=Color.PRIMARY.value,position="fixed",z_index="4"),
                rx.hstack(
                    personal_info(),
                    rx.center(
                        projects(),
                        width= "100%"
                    ),
                    bg = Color.BACKGROUND.value,
                    padding_top=Styles.Size.MEDIUM.value,
                ),
                bg = Color.BACKGROUND.value,
            )

app = rx.App(
                style=Styles.BASE_STYLE
            )
app.add_page(
                index,
                title="Fernando Cosentino | Systems Analyst.",
                description="Hi, I'm Fernando Cosentino, a systems analyst, and this is my portfolio."
            )
app.compile()