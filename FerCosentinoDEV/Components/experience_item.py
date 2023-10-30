import reflex as rx
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.fonts import Font_Size
import FerCosentinoDEV.constants as Const

def experience_item(job:Const.Job) -> rx.Component:
    return rx.box(
                    rx.text(f"{job.company_name}, {job.location} - {job.position}", color=Color.SECONDARY.value, font_size=Font_Size.LARGE.value, as_="i"),
                    rx.unordered_list(
                        items=job.tasks,
                        spacing=".025em",
                        color=Color.SECONDARY.value,
                        font_size=Font_Size.DEFAULT.value
                    ),
                    padding="2%",
                    margin="5px",
                    bg=Color.BACKGROUND.value,
                    border_radius = "10px"
            )