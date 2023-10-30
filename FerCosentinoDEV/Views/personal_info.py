from enum import Enum
import reflex as rx
from FerCosentinoDEV.Styles.colors import Color, TextColor
from FerCosentinoDEV.Styles.styles import Size
from FerCosentinoDEV.Styles.fonts import Font_Size
from FerCosentinoDEV.Views.contact import contact
from FerCosentinoDEV.Views.education import education
from FerCosentinoDEV.Views.experiences import experiences
import FerCosentinoDEV.constants as Const


def personal_info() -> rx.Component:
    return  rx.vstack(
                rx.avatar(
                    name=Const.NAME,
                    src="perfil.png",
                    show_border=True,
                    border_color=Color.PRIMARY.value,
                    bg= Color.CONTENT.value,
                    size="2xl"
                ),
                contact(),
                rx.text(
                    Const.PERSONAL_DESCRIPTION,
                    color = Color.SECONDARY.value,
                    _as = "b",
                    font_size=Font_Size.LARGE.value
                ),
                rx.card(
                    experiences(),
                    width= "100%",
                    height= "100%",
                    bg = Color.CONTENT.value),
                rx.card(
                    education(),
                    width= "100%",
                    height= "100%",
                    bg = Color.CONTENT.value),
                rx.card(
                    rx.vstack(
                        rx.code_block(
                            Const.SKILLS,
                            language="python",
                            show_line_numbers=True,
                            theme = "dark",
                            width= "100%",
                            height= "100%",
                            margin=Size.MEDIUM.value
                        ),
                        rx.code_block(
                            Const.INTERESTING,
                            language="python",
                            show_line_numbers=True,
                            theme = "dark",
                            width= "100%",
                            height= "100%",
                            margin=Size.MEDIUM.value
                        ),
                        bg = Color.CONTENT.value,
                        border_radius="10px",
                        margin=Size.MEDIUM.value
                    ),
                    width= "100%",
                    height= "100%",
                    bg = Color.CONTENT.value
                ),
                margin="5%",
                width="100%",
                height="100%"
            )
    




