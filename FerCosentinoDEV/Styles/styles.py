from enum import Enum
from FerCosentinoDEV.Styles.fonts import Font

class Size(Enum):
    ZERO = "opx !Important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"

BASE_STYLE = {
    "font_family":Font.DEFAULT.value
}