
import {useState} from "react";

function ProfileCard({titulo,img,handle, alt}){

    const [count, setCount] = useState(0);

    function handleClickSuma(){
        setCount( count + 1);
    }
    function handleClickResta(){
        if(count > 0){
            setCount( count - 1);
        }
    }

    return (
        
        <div className="card">
            <div className="card-img">
                <figure className="image">
                    <img src={img} alt={alt}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div>El titulo es {titulo} </div>
                    <p>El handle es: {handle}</p>
                    <div className="columns">
                        <div className="column">
                            <button className="button is-primary is-fullwidth" onClick={handleClickSuma}>+</button>
                        </div>
                        <div className="column">
                        <span><p className="content is-medium">{count}</p></span>
                        </div>
                        <div className="column">
                            <button className="button is-danger is-fullwidth" onClick={handleClickResta}>-</button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>

    )

}



export default ProfileCard;