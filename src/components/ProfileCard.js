
import {useState} from "react";

function ProfileCard({title,img,description, alt}){

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
                <figure className="image is-3by4">
                    <img src={img} alt={alt} height={100}/>
                </figure>
            </div>
            <div className="card-content is-flex is-flex-direction-column">
                <div className="media-content">
                    <div className="title is-5">{title}</div>
                    <p className="">{description}</p>
                    <span className="title is-6 "><p className="pt-2 has-text-centered">Agrega al carrito:</p></span>
                    <div className="columns pt-5">
                        <div className="column is-flex is-justify-content-center">
                            <button className="button is-primary is-fullwidth" onClick={handleClickSuma}>+</button>
                        </div>
                        <div className="column is-3 mt-1 is-flex is-justify-content-center">
                        <span><p className="content is-medium">{count}</p></span>
                        </div>
                        <div className="column is-flex is-justify-content-center">
                            <button className="button is-danger is-fullwidth" onClick={handleClickResta}>-</button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>

    )

}



export default ProfileCard;