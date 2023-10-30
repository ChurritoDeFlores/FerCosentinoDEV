import reflex as rx
from FerCosentinoDEV.Components.education_item import educacion_item
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.fonts import Font_Size
import FerCosentinoDEV.constants as Const

def education() -> rx.Component:
    return rx.box(
                    rx.text("Education", color=Color.PRIMARY.value, font_size=Font_Size.VERY_BIG.value, as_="b"),
                    educacion_item(Const.EDU_ING_MECANICA),
                    educacion_item(Const.EDU_TECNICO_PC),
                    educacion_item(Const.EDU_ANALISTA_DE_SISTEMAS),
                )