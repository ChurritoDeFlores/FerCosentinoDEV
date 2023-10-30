import reflex as rx
from FerCosentinoDEV.Styles.styles import Size

def link_item(image:str, url:str) -> rx.Component:
    return rx.link(
                rx.image(
                    src=image,
                    width=Size.LARGE.value,
                    margin=Size.DEFAULT.value
                ),
                href = url,
                is_external=True,
                
            )