import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
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
                            <ProfileCard title="Grand Theft Auto V" description="Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Es el primer juego principal de la serie Grand Theft Auto desde Grand Theft Auto IV de 2008." img="https://th.bing.com/th/id/OIP.Uja6gdwBme6N_AId581P9gHaJF?pid=ImgDet&rs=1" alt="Alexa"/>
                        </div>
                        <div className="column is-flex is-justify-content-center is-4">
                            <ProfileCard title="Call of Duty: Modern Warfare" description="Call of Duty: Modern Warfare es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Es el decimosexto juego de la serie Call of Duty y actúa como un reinicio suave de la subserie Modern Warfare." img="https://th.bing.com/th/id/OIP.Yz-uGutd0ueAg22hxaHZoQHaKX?pid=ImgDet&rs=1" alt="Siri"/>
                        </div>
                        <div className="column is-flex is-justify-content-center is-4">
                            <ProfileCard title="Warframe" description="Warframe es un juego de disparos en tercera persona gratuito y cooperativo que se desarrolla en un mundo en constante expansión. Juega como uno de los Tenno, guerreros antiguos que han despertado de siglos de criostasis para encontrarse en una guerra con las facciones Grineer, Corpus y Infested." img="https://th.bing.com/th/id/R.3465c583ea184729c4baac5abd38e5bc?rik=cdoXEl1A95UDCw&pid=ImgRaw&r=0" alt="Cortana"/>            
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}


export default App;
