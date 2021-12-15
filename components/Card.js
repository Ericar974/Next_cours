import react from "react";
import Image from "next/image";

export default function Card(props) {


    function getProps() {
        console.log(props)
    }
    return (
        <div>
            {
            //title
            //Image
            //description 
            //prix
            }

            <h3>{props.title}</h3>
            {props.image && <Image src={props.image} alt="" width="100%" height="100%"/>}
            <p>{props.desc}</p>
            <h4>{props.price} euros</h4>
            <button onClick={() => getProps()}>Details</button>
        </div>
    )
}