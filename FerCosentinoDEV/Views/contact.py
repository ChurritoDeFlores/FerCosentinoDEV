import reflex as rx
from FerCosentinoDEV.Components.link_item import link_item
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.styles import Size
import FerCosentinoDEV.constants as Const
def contact() -> rx.Component:
    return  rx.center(
                rx.hstack(
                    link_item('github.svg',Const.URL_GITHUB),
                    link_item('linkedin.svg',Const.URL_LINKEDIN),
                    link_item('instagram.svg',Const.URL_INSTAGRAM),
                    link_item('email.svg',f"mailto:{Const.EMAIL}"),
                    bg = Color.BACKGROUND.value,
                    width="100%",
                )
            )