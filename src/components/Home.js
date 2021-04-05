/* import {
    useParams
} from "react-router-dom"; */
import "../Styles.css";
import bkpic from "../images/set.png";

const HOME = () => {
    /*     let { col } = useParams(); */

    return (
        <div style={{
            backgroundColor: 'lightblue'
        }}>
            <div /*  style={{
                backgroundImage: `url(${bkpic})`
            }} */>
                <div className="hslhome"
                >
                    HOME PAGE
                <container style={{ display: 'flex', fontSize: '22px', color: 'gray' }} >
                        <section style={{ height: '300px', marginLeft: '10vh', marginRight: '10vh' }}>
                            <div class="card mb-3" style={{ maxWidth: '1200px', maxHeight: '900px', borderRadius: '0.5%'/* , margin: '20px' */ }}>
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src="https://res.cloudinary.com/expovirtual/image/upload/v1617502068/phenompics/Fotografo_b5jgdk.jpg" alt="..." style={{ maxWidth: '270px', padding: 20 }} />
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <h5 class="card-title">WHOAMI</h5>
                                            <p class="card-text">Mi nombre es Cristian, intersado por encontrar vibraciones en cada individuo y capturarlos en fotografias. Incansable buscador de momentos, paisajes y relaciones entre los protagonistas naturales en fotografias de paisaje.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*   <section style={{ height: '300px', marginLeft: '10vh' }}>
                        <div class="card mb-3" style={{ maxWidth: '540px'/* , margin: '20px' }}>
                            <div class="row g-0">
                                <div class="col-md-6">
                                    <img src="https://res.cloudinary.com/expovirtual/image/upload/v1617502068/phenompics/Fotografo_b5jgdk.jpg" alt="..." style={{ maxWidth: '270px', padding: 20 }} />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">WHOAMI</h5>
                                        <p class="card-text">Mi nombre es Cristian, intersado por encontrar vibraciones en cada individuo y capturarlos en fotografias. Incansable buscador de momentos, paisajes y relaciones entre los protagonistas naturales en fotografias de paisaje.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    </container>
                </div>
            </div>
        </div>
    );
}

export default HOME;