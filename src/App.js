import ProfileCard from "./ProfileCard";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";
import "bulma/css/bulma.css";


function App(){
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido"}/>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-flex is-justify-content-center is-4">
                            <ProfileCard titulo="Alexa" handle="@alexa88" img={AlexaImg} alt="Alexa"/>
                        </div>
                        <div className="column is-flex is-justify-content-center is-4">
                            <ProfileCard titulo="Siri" handle="@siri_99" img={SiriImg} alt="Siri"/>
                        </div>
                        <div className="column is-flex is-justify-content-center is-4">
                            <ProfileCard titulo="Cortana" handle="@cortana_02" img={CortanaImg} alt="Cortana"/>            
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}


export default App;
