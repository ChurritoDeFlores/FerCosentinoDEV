import reflex as rx
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.styles import Size, RUN_BUTTON_PROJECT_STYLE,IMG_BUTTON_PROJECT_STYLE
from FerCosentinoDEV.Styles.styles import TITLE_PROJECT_STYLE, DESCRIPTION_PROJECT_STYLE, IMG_PROJECT_STYLE
from FerCosentinoDEV.Styles.styles import URL_TEXT_POJECT_STYLE, URL_POJECT_STYLE, LENGUAGES_PROJECT_STYLES
import FerCosentinoDEV.constants as Const


def project_item(project: Const.Project) -> rx.Component():
    return  rx.card(
                rx.vstack(
                    rx.hstack(# HEADER_PROJECT
                        rx.text( # TITTLE_PROJECT
                            project.title,
                            style = TITLE_PROJECT_STYLE
                        ),
                        rx.link( ## RUN_BOTTON_PROJECT
                            rx.image( #IMG_PROJECT
                                src="play_button.svg",
                                style = IMG_BUTTON_PROJECT_STYLE,
                            ),
                            rx.text("Run"),
                            href= project.url_app,
                            style=RUN_BUTTON_PROJECT_STYLE,
                            is_external = True,
                        ),
                        width="100%"
                    ),
                    rx.hstack(
                        rx.text(
                            project.description,
                            style=DESCRIPTION_PROJECT_STYLE
                        ),
                        rx.image(
                            src=project.url_image,
                            style=IMG_PROJECT_STYLE
                        ),
                        width="100%",
                        margin_top=Size.LARGE.value
                    ),
                    rx.hstack(
                        rx.link(
                            rx.text(
                                project.url_github,
                                style = URL_TEXT_POJECT_STYLE
                            ),
                            href=project.url_github,
                            style = URL_POJECT_STYLE,
                            button=True,
                            is_external=True,
                        )
                        ,
                        rx.text(
                            project.languages_used,
                            style = LENGUAGES_PROJECT_STYLES
                        ),
                        width="100%"
                    )
                ),
                bg = Color.BACKGROUND.value,
                width="98%"
            )