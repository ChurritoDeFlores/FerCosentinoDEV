import reflex as rx
from FerCosentinoDEV.Components.project_item import project_item 
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.styles import Size
import FerCosentinoDEV.constants as Const
def projects() -> rx.Component:
    return  rx.card(
                rx.vstack(
                    rx.text(
                        'Proyects',
                        font_size=Size.BIG.value,
                        color = Color.PRIMARY.value,
                        as_="b"
                    ),
                    project_item(Const.PROJECT_API_PYTODO),
                    project_item(Const.PROJECT_APP_PYTODO),
                    project_item(Const.PROJECT_FLAPPY_BIRD),
                    project_item(Const.PROJECT_CALCULATOR),
                    project_item(Const.PROJECT_TELE_PONG),
                    project_item(Const.PROJECT_MI_PORTAFOLIO)
                ),
                bg = Color.CONTENT.value,
                width="100%",
                height="100%",
                margin_right=Size.VERY_BIG.value,
                margin_top="100px"
            )
