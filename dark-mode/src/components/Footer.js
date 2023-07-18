import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer() {

    const theme = useContext(ThemeContext);

    return (
       <footer><p>Tema Atual: { theme.color }</p></footer>
    );
}

export default Footer;
