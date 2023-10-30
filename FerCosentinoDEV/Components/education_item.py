import reflex as rx
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.styles import Size
from FerCosentinoDEV.Styles.fonts import Font_Size
import FerCosentinoDEV.constants as Const

def educacion_item(edu:Const.AcademicExperience)->rx.Component:
    return rx.box(
                    rx.text(f"{edu.institution} - {edu.location} - {edu.title}", color=Color.SECONDARY.value, font_size=Font_Size.LARGE.value, as_="i"),
                    rx.spacer(),
                    rx.text(f"({edu.start_date} - {edu.finish_date}) / {edu.status()}", color=Color.SECONDARY.value, font_size=Font_Size.MEDIUM.value),
                    rx.unordered_list(
                        items=edu.knowledge_obtained,
                        spacing=".025em",
                        color=Color.SECONDARY.value,
                        font_size=Font_Size.DEFAULT.value
                    ),
                    padding="2%",
                    margin=Size.MEDIUM.value,
                    bg=Color.BACKGROUND.value,
                    border_radius = "10px"
            )