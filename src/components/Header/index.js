import "../../styles/header/styles-header.css"
const Header = () => {

    return (
        <div className="header">
            <div className="title-header">
                <h1>GATITOS RANDOM QUE TE MEJORAN EL DÍA</h1>
            </div>
            <div className="div-nav">
                <nav>
                    <ul>
                        <li><a className="title-link" href="/">Salir</a></li>                        
                    </ul>
                </nav>
            </div>
        </div>
    );

}

export default Header;