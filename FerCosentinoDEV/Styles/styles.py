from enum import Enum
from FerCosentinoDEV.Styles.colors import Color
from FerCosentinoDEV.Styles.fonts import Font, Font_Size

class Size(Enum):
    ZERO = "opx !Important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"

BASE_STYLE = {
    "font_family":Font.DEFAULT.value,
    "bg" : Color.BACKGROUND.value
}

STYLESHEETS = [
    "https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
]

LINE_TOP_STYLE ={
    "width":"100%",
    "height":"83px",
    "bg":Color.PRIMARY.value,
    "position":"fixed",
    "z_index":"4"
}
RUN_BUTTON_PROJECT_STYLE={
    "display":'flex',
    "align_items" : 'center',
    "color" : Color.BACKGROUND.value,
    "font_size" : Font_Size.LARGE.value,
    "_as" : 'b',
    "button" : True,
    "bg" : Color.PRIMARY.value,
    "padding_x" : Size.DEFAULT.value,
    "border_radius" : Size.SMALL.value,
    "margin_right" : "5%",
    "margin_left" : "0%",
    "_hover" : {
        "bg": Color.CONTENT.value,
        "border_color": Color.SECONDARY.value,
        "text_color": Color.PRIMARY.value,
    }
}
IMG_BUTTON_PROJECT_STYLE = {
    "width" : Size.DEFAULT.value,
    "height" : Size.DEFAULT.value,
    "margin_y" : Size.SMALL.value,
    "margin_right" : Size.SMALL.value,
}
TITLE_PROJECT_STYLE = {
    "color" : Color.PRIMARY.value,
    "font_size" : Size.LARGE.value,
    "as_" : "b",
    "margin_right" : "auto",
    "margin_left" : "2%"
}
DESCRIPTION_PROJECT_STYLE = {
    "color" : Color.SECONDARY.value,
    "font_size" : Size.DEFAULT.value,
    "margin_right" : "auto",
    "margin_left" : "2%"
}
IMG_PROJECT_STYLE = {
    "max_width" : '50%',
    "max_height" : "180px",
    "margin_right" : "5%",
    "margin_left" : "0%"
}
URL_TEXT_POJECT_STYLE = {
    "color" : Color.SECONDARY.value,
    "font_size" : "1em",
    "as_" : "i"
}
URL_POJECT_STYLE = {
    "margin_right" : "auto",
    "margin_left" : "2%"
}
LENGUAGES_PROJECT_STYLES = {
    "color" : Color.SECONDARY.value,
    "font_size" : Size.DEFAULT.value,
    "as_" : "i",
    "margin_right" : "5%",
    "margin_left" : "0%"
}