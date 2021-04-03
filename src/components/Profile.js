/* import {
    useParams
} from "react-router-dom"; */

import "../Styles.css";
import bkpic from "../images/set.png";
import mayra from "../images/Mayra.jpg";
import matias from "../images/Matias.JPG";
import cristian from "../images/Cristian.JPG";
import jazmin from "../images/Jazmin.jpg";
import { useEffect, useState } from "react";

const PROFILE = () => {


    /*     let { col } = useParams(); */
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        //cargo las imagenes en la variable ssesions
        let bdSessions = [{
            image: "https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/391529_3908302758020_1004834115_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=nO8ORhu32lAAX-amrJY&_nc_ht=scontent.feze14-2.fna&oh=30cf6a0fa959aefd7c1a8ba7d950ad1e&oe=608E0E4E",
            name: "Alejandro",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: matias,
            name: "Matias",
            description: "Sesion de estudio con luces de colores"
        },
        {
            image: mayra,
            name: "Mayra",
            description: "Sesion de estudio con luces y pantalla reflectora"
        },
        {
            image: cristian,
            name: "Cristian",
            description: "Sesion de estudio con luces de colores"
        },
        {
            image: jazmin,
            name: "Jazmin",
            description: "Sesion en exterior arbolado"
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
                <div class="row row-cols-1 row-cols-md-3 g-4">

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