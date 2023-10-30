import reflex as rx
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.styles import Size
from FerCosentinoDEV.Styles.fonts import Font_Size
import FerCosentinoDEV.constants as Const


def project_item(project: Const.Project) -> rx.Component():
    return  rx.card(
                rx.vstack(
                    rx.hstack(
                        rx.text(
                            project.title,
                            color=Color.PRIMARY.value,
                            font_size="1.5em",
                            as_="b",
                            margin_right="auto",
                            margin_left="2%"
                        ),
                        rx.link(
                            rx.image(
                                src="play_button.svg",
                                width=Size.DEFAULT.value,
                                height=Size.DEFAULT.value,
                                margin_y=Size.SMALL.value,
                                margin_right=Size.SMALL.value
                            ),
                            "Run",
                            href= project.url_app, #error, no funciona el boton
                            display='flex',
                            align_items= 'center',
                            color=Color.BACKGROUND.value,
                            font_size=Font_Size.LARGE.value,
                            as_='b',
                            button = True,
                            is_external=True,    
                            bg=Color.PRIMARY.value,
                            padding_x= Size.DEFAULT.value,
                            border_radius= Size.SMALL.value,
                            margin_right="5%",
                            margin_left="0%",
                            _hover={
                                    "bg": Color.CONTENT.value,
                                    "border_color": Color.SECONDARY.value,
                                    "text_color": Color.PRIMARY.value,
                                    }
                        ),
                        width="100%"
                    ),
                    rx.hstack(
                        rx.text(
                            project.description,
                            color=Color.SECONDARY.value,
                            font_size="1.1em",
                            margin_right="auto",
                            margin_left="2%"
                        ),
                        rx.image(
                            src=project.url_image,
                            max_width="50%",
                            max_height="180px",
                            margin_right="5%",
                            margin_left="0%"
                        ),
                        width="100%",
                        margin_top=Size.LARGE.value
                    ),
                    rx.hstack(
                        rx.link(
                            rx.text(
                                project.url_github,
                                color=Color.SECONDARY.value,
                                font_size="1em",
                                as_="i"
                            ),
                            href=project.url_github,
                            button=True,
                            is_external=True,
                            margin_right="auto",
                            margin_left="2%"
                        )
                        ,
                        rx.text(project.languages_used, color=Color.SECONDARY.value, font_size="1em", as_="i", margin_right="5%",margin_left="0%"),
                        width="100%"
                    )
                ),
                bg = Color.BACKGROUND.value,
                width="98%"
            )