/* import {
    useParams
} from "react-router-dom"; */

import "../Styles.css";
import bkpic from "../images/set.png";
import { useEffect, useState } from "react";

const PROFILE = () => {


    /*     let { col } = useParams(); */
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        //cargo las imagenes en la variable ssesions
        let bdSessions = [{
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488706/phenompics/Alejandro_iwwjhy.jpg",
            name: "Alejandro",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617492568/phenompics/David_pebkbz.jpg",
            name: "David",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488274/phenompics/Mayra_wvjqr9.jpg",
            name: "Mayra",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488276/phenompics/Cristian_eecfgo.jpg",
            name: "Cristian",
            description: "Sesion de estudio con luces de colores"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488276/phenompics/Yamila_cohpyg.jpg",
            name: "Yamila",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488276/phenompics/Matias_rij3z9.jpg",
            name: "Matias",
            description: "Sesion de estudio con luces de colores"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617492569/phenompics/Guadalupe_o7plxb.jpg",
            name: "Guadalupe",
            description: "Sesion en exterior"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617488274/phenompics/Jazmin_arjzgz.jpg",
            name: "Jazmin",
            description: "Sesion en exterior arbolado"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617492570/phenompics/Agustin_gctgtj.jpg",
            name: "Agustin",
            description: "Sesion en exterior arbolado"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617495514/phenompics/Claudia_ngffqi.jpg",
            name: "Claudia",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617495120/phenompics/MarinaLuz_qf8msa.jpg",
            name: "Marina",
            description: "Sesion en exterior"
        },
        {
            image: "https://res.cloudinary.com/expovirtual/image/upload/v1617495121/phenompics/Rodrigo_l1kcaz.jpg",
            name: "Rodrigo",
            description: "Sesion en exterior"
        }
    ]

        setSessions(bdSessions);
    }, []);


    return (
        <div>
            <div style={{
                backgroundImage: `url(${bkpic})`,
            }}>
                <div className="hslprofile"
                >
                    PROFILE PICTURES
            </div>
                <div class="row row-cols-1 row-cols-md-3 g-4" >

                    {sessions.map(session =>

                        <div class="col">
                            <div class="card h-100">
                                <img key={session.name} src={session.image} class="card-img-top" alt={session.name} />
                                <div class="card-body">
                                    <h5 class="card-title">{session.name}</h5>
                                    <p class="card-text">{session.description}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PROFILE;