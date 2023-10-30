import reflex as rx
from FerCosentinoDEV.Components.experience_item import experience_item
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.fonts import Font_Size
import FerCosentinoDEV.constants as Const

def experiences() -> rx.Component:
    return rx.box(
                    rx.text("Experience", color=Color.PRIMARY.value, font_size=Font_Size.VERY_BIG.value, as_="b"),
                    experience_item(Const.JOB_SIMULADORES_EN_RED)
                )