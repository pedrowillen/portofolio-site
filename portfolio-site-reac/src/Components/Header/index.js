import { HeaderContent } from "./styles"
import Nav from "./Nav";
import HeaderMain from "./HeaderMain";

const Header = () => {
     return (
        <HeaderContent>
            <Nav />
            <HeaderMain />
        </HeaderContent>
     );
}

export default Header;