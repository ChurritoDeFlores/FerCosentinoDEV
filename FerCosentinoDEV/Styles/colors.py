from enum import Enum

class Color(Enum):
    PRIMARY = "#F1622B" # Naranja oscuro
    SECONDARY = "#FF9E4D" # Naranja Claro
    BACKGROUND = "#00081B" # Azul oscuro
    CONTENT = "#254168" # Azul Claro
    
    COLORS = {
        True: {
            PRIMARY: "#00081B",
            SECONDARY: "#254168",
            BACKGROUND: "#F1622B",
            CONTENT: "#FF9E4D",
        },
        False: {
            PRIMARY: "#F1622B",
            SECONDARY: "#FF9E4D",
            BACKGROUND: "#00081B",
            CONTENT: "#254168",
        }
    }
    
    def change_check(self, checked: bool):
        self.value = self.COLORS[checked][self]


class TextColor(Enum):
    HEADER = "#F1F2F4"
    BODY = "#C3C7CB"
    FOOTER = "#A3ABB2"