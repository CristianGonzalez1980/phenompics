/* import {
    useParams
} from "react-router-dom"; */
import "../Styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bkpic from "../images/zoom.png";
import { useEffect, useState } from "react";

const ARTISTIC = () => {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Carousel = require('react-responsive-carousel').Carousel;

    const [artistic, setArtistic] = useState([]);
    const [artisticV, setArtisticV] = useState([]);
    const [artisticH, setArtisticH] = useState([]);
    const [artisticV2, setArtisticV2] = useState([]);
/*     var indices = []; */

    useEffect(() => {
        //cargo las imagenes en la variable ssesions

        /*     let { col } = useParams(); 
        */
        let bdV = [
/*             {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.6435-9/67526529_10217404074506531_1482854217906388992_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MxA6aQFnLBMAX83TtY6&_nc_ht=scontent.feze14-1.fna&oh=53cc64d203fd9bb96d0cf115036319ff&oe=608FB616',
                label: 'Atardecer en Piriapolis',
                description: 'Vista desde el Cerro San Antonio, Priapolis - Uruguay'
            }, */
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/14882178_10209594629395284_1358572908828427717_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=7Cn8bhaIEjMAX8Y9TNO&_nc_ht=scontent.feze14-2.fna&oh=f2cd0ab0c13548d67bef9a25757a6a2e&oe=608D7E0B',
                label: 'Anochecer en Corrientes',
                description: 'Vista de la Virgen de Stella Maris, Corrientes'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/1914392_1228854114203_4788640_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=FS743QJmuKQAX81giDX&_nc_ht=scontent.feze14-2.fna&oh=dbd0428fa79f556227a3594d72ec4795&oe=6090020E',
                label: 'Llegando a la fiesta',
                description: 'Descenso del vehiculo de quincieañera, Berazategui'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10391769_1261686614995_2663337_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=df3FGODdRiMAX9qVhnc&_nc_ht=scontent.feze14-2.fna&oh=6359e427fcaa1720b6698b64713e0b84&oe=608F8A18',
                label: 'Siluetas al atardecer',
                description: 'Culminando la hora mágica en Colonia de Sacramento - Uruguay'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/183137_10200495762849307_439944477_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=nHKbMctMO8kAX-5LQqI&_nc_ht=scontent.feze14-1.fna&oh=72b3905693cbb6b5f6e23398c49e1e2c&oe=6090036B',
                label: 'Giro en baile tradicional',
                description: 'Captura del movimiento del vestido durante una exhibición en Cuzco - Perú'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/21269_10200495764769355_1754731681_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=uIle8lakm40AX-S-Wrm&_nc_ht=scontent.feze14-1.fna&oh=145bef05924513e1f605852a0ec1bf27&oe=608D61E7',
                label: 'Giro y traslado de objeto en baile tradicional',
                description: 'Captura del movimiento del vestido y el de un objeto durante una exhibición en Cuzco - Perú'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/3567_10200464425385890_1848291098_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=N0YPehwC3gIAX_aE5Hw&_nc_ht=scontent.feze14-2.fna&oh=d5f9b1a1b3a1ebc8dba57f2b0b66259a&oe=608F2FF8',
                label: 'Flamencos sobre laguna',
                description: 'Tomado en laguna hedionda - Bolivia'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/528905_3536646207563_1211399862_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=QrcY6_Q2iNYAX-5tYNc&_nc_ht=scontent.feze14-1.fna&oh=54682383bf997ffcaeb0355d7db9e742&oe=608FC662',
                label: 'Fuente en puerto de frutos',
                description: 'Tomada en Tigre'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/24809_1383660144257_3915408_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=wceQTTW6tCsAX8YnFXp&_nc_ht=scontent.feze14-1.fna&oh=474cee4a49c6d0df57d7399959cd8b43&oe=608E5E56',
                label: 'Escalada en el glaciar',
                description: 'Tomada en el Perito Moreno - Río Gallegos'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/166195_1715630563310_4982836_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=mbtuHCsjymEAX98nRbw&_nc_ht=scontent.feze14-1.fna&oh=9cbd38ffd48ec799b026bd1b6c5a390d&oe=609023DB',
                label: 'Monumento a la bandera',
                description: 'Nocturna con luz artificial, Rosario - Santa Fé'
            }
        ]

        let bd = [

            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/14853248_10209594631875346_7277488774844935738_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=jnQyyYBTpp8AX_prR6C&_nc_ht=scontent.feze14-2.fna&oh=8fa5aa89008cd710d8e6d82cc0f51267&oe=609054BE',
                label: 'Atardecer en Corrientes',
                description: 'Vista del puente General Belgrano, Corrientes'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t31.18172-8/14856103_10209594628635265_5085689754534079374_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=MLpltljpCJsAX-P9PjZ&_nc_ht=scontent.feze14-1.fna&oh=c18c0053889ed384cbe99471eef2222d&oe=60902205',
                label: 'Despues del temporal',
                description: 'Costanera de Corrientes luego de la lluvia, Corrientes'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/1934368_1204534626231_2482463_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=pWycA-O7P9cAX-eJ4IZ&_nc_ht=scontent.feze14-1.fna&oh=3d6471c26dc7860918e46c9838606d17&oe=608CED3E',
                label: 'Figura en la altura',
                description: 'Tomada desde la quebrada de zonda, San Juan'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/1936245_1201857679309_5029878_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=dYfZdUKQOL4AX_-nrJC&_nc_ht=scontent.feze14-2.fna&oh=9d64be80037c5e65cd225255597ce38f&oe=60902805',
                label: 'Silueta del Arroyo',
                description: 'Tomada en Rivadavia, San Juan'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10399947_1179192112684_1145269_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=VkOwIwuax30AX-0ORId&_nc_ht=scontent.feze14-2.fna&oh=6a95cca4d7d14594e5f6b270f0f42eb2&oe=608E109D',
                label: 'Gota Espejada',
                description: 'Rocio sobre las hojas de un ficus'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/4811_1166988927612_3214291_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=86SzLLJ-UlkAX_jSHF2&_nc_ht=scontent.feze14-1.fna&oh=a2bcc96e9e12209985c1390ce9eb93f8&oe=608FDB61',
                label: 'Movimiento en la plaza',
                description: 'Niña hamacandose, barrido del movimiento, Quilmes'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10398843_1209239583852_4847156_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=UWJNuz12dfEAX9sXD8p&_nc_ht=scontent.feze14-2.fna&oh=6b3a3c98690b33dac93d0df88fe8776d&oe=608E0867',
                label: 'Agua de dehielo',
                description: 'Barrido a contraluz del agua cayendo en la altura, Barreal - San Juan'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10398843_1209239503850_4958079_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=CeSg0g9DwkYAX9Pfzq-&_nc_ht=scontent.feze14-2.fna&oh=95d4df0d759684c73e4a5009ebb86b2f&oe=608E5808',
                label: 'Alambrado en el campo',
                description: 'Foco diferenciado dobre alambre de púa, Barreal - San Juan'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/1914392_1227097670293_3500736_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=cg_4GOWX0bsAX9X1h_y&_nc_ht=scontent.feze14-1.fna&oh=bafd29e7b127f30c61dd1643e1a120de&oe=608EB250',
                label: 'Petroglifos',
                description: 'Tomados en Cañon de Talampaya - La Rioja'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/1914392_1227654404211_501059_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=Y0i8Z5LGZGkAX_i3tFX&_nc_ht=scontent.feze14-2.fna&oh=11f4a1285872be24f9638d73c2c997d9&oe=608EA16F',
                label: 'Rojo dominante',
                description: 'Amelia, viajera y amiga circunstancial, Talampaya - La Rioja'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/10391769_1261648334038_4473404_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=t_bSbCaAzXMAX81LYWz&_nc_ht=scontent.feze14-1.fna&oh=e75ff0abe90587c6951bcbfb3142867f&oe=608DBD82',
                label: 'A la espera de turistas',
                description: 'Mesas bajo un cielo nublado en Colonia de Sacramento - Uruguay'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10391769_1261661014355_4091416_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=p7vC10PWY1cAX8e5D39&_nc_ht=scontent.feze14-2.fna&oh=707aab4e247c62f14963bbdb77112edc&oe=60906FCE',
                label: 'En cuento de hadas',
                description: 'Conversación a orillas del río entre flores, Colonia de Sacramento - Uruguay'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/29103_1403931691033_1675195_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=2c4854&_nc_ohc=OI5VEK604-0AX809VU_&_nc_ht=scontent.feze14-1.fna&oh=47196c86960045ba705a8df4f90d2a5c&oe=60908724',
                label: 'Rojo Dominante',
                description: 'Compsición en un infierno desértico. Modelo: Valeria'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/1512726_10201966960988341_1496211993_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=0mvOTBFOaNUAX-_MH4l&_nc_ht=scontent.feze14-2.fna&oh=4004eef66f232624edd76630047e3346&oe=608D32BD',
                label: 'En 2 ruedas',
                description: 'Barrido del movimiento de un paseo en bicicleta, Quilmes'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/215246_10200495778449697_889142002_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=rt2fQb8A5VcAX_0l-D4&_nc_ht=scontent.feze14-1.fna&oh=8164576c8730fd0dd2608fbb785833f8&oe=608DDFF3',
                label: 'Estibado de frutas y verduras en mercado local',
                description: 'Tomado en el Cuzco - Perú'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/944402_10200495788409946_898744092_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=VrWeqeUxPqEAX8ouYOR&_nc_ht=scontent.feze14-1.fna&oh=fa890cefc856772ee4e1633e25926229&oe=608E8DB6',
                label: 'Reponiendo Totoras',
                description: 'Llegada de embarcaciones con totoras frescas para reponer sobre el suelo, Isla de Uros - Perú'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/306885_10200520202220276_399736247_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=wArev5AlRc4AX_4vIx4&_nc_ht=scontent.feze14-1.fna&oh=f5615ff863b636b45d5fc3108da30ae9&oe=608FD4DB',
                label: 'Custodiando Machu Pichu',
                description: 'Vicuña descansando sobre el pasto, Machu Pichu - Perú'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/944606_10200520211460507_514883154_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=3bfp6t_dJlgAX8hChDU&_nc_ht=scontent.feze14-2.fna&oh=3c87bc0f658a3bb92db9081ea35f5edf&oe=608FD044',
                label: 'Modelo simpático circunstancial',
                description: 'Niño volviendo de la escula espera sonriente ser fotografiado, Urubamba - Perú'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/217508_10200458861726802_1923979175_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=_mmWvrpj7PoAX_rnwl-&_nc_ht=scontent.feze14-2.fna&oh=18d9f046b5e3c295d3bf3f14eb8c20b1&oe=608D94E4',
                label: 'Descubriendo la sal',
                description: 'Montaña de sal cubierta de tierra, Desierto de Atacama - Chile'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/942448_10200458871607049_1936732978_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=g4aYXlOfHR0AX8yjubf&_nc_ht=scontent.feze14-2.fna&oh=efe71e6031b37943b5d5fd6585407f14&oe=608D4CE9',
                label: 'Humo matutino',
                description: 'Frio en la madrugada, Geysers del tatio - Chile'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/944269_10200480503747839_1806715721_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=E0CVo_kotm0AX9ssK9v&_nc_ht=scontent.feze14-1.fna&oh=e6f628f2f47419adc3d52e430deb05f7&oe=608FCDA2',
                label: 'Gulliver en Uyuni',
                description: 'Tomada en desierto de sal Uyuni - Bolivia'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/262408_10200480506427906_935003959_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=8BX8n70ZBHoAX-O89Gl&_nc_ht=scontent.feze14-1.fna&oh=d6cc44def3b0a970b2200ae214e1c6d7&oe=608F5737',
                label: 'Contraluz sobre cactus',
                description: 'Tomada en isla del pescado, desierto de sal Uyuni - Boliva'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/225633_10200480507667937_1404219273_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=ts6hUnGlrl0AX8mzc9a&_nc_ht=scontent.feze14-2.fna&oh=74c5719e662e4e8c81edbec5f78fb662&oe=608DEB70',
                label: 'Amanecer en el salar',
                description: 'Tomada en el desierto de sal Uyuni - Bolivia'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/395622_10200485514073094_212195688_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=pdQop0yfRtQAX9Lv1Fo&_nc_ht=scontent.feze14-2.fna&oh=f3889f751ca702100d45ca530b1b4912&oe=60908D97',
                label: 'Atardecer en Copacabana',
                description: 'Tomada en el puerto de Copacabana - Bolivia'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/418950_4029949739843_321568462_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=yfJEGoIwE0wAX8Y2x0E&_nc_ht=scontent.feze14-2.fna&oh=d21f2c9f63e5d9f9eaaae3eb8ebada82&oe=608CEDAC',
                label: 'Fotografiando la garganta',
                description: 'Grupo de turistas sobre la pasarela de la garganta del diablo - Misiones'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/409708_4029988900822_1545353412_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=xym1NEB1h98AX_ynooC&_nc_ht=scontent.feze14-2.fna&oh=195fa1cbfaddd3b4fc289f6978a867b0&oe=608D5928',
                label: 'Pasarela estruendosa',
                description: 'Punto de fuga sobre la garganta del diablo llegando desde la pasarela - Misiones'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/193865_1800458083945_4824973_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=YQPopJwxXwEAX-nJ6xz&_nc_ht=scontent.feze14-2.fna&oh=99bc47f38f4fc50675ee491cd0824ab3&oe=6090107A',
                label: 'Muelle al atardecer',
                description: 'Atardecer sobre la costanera de Miramar - Cordoba'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/172893_1807506700156_4030177_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=hIBb7TYWFVMAX8ucwYw&_nc_ht=scontent.feze14-2.fna&oh=1a21b22d9dd153e59807ec07767ed982&oe=608E2F9F',
                label: 'Libélula',
                description: 'Foco diferenciado sobre Libélula en San Marcos Sierras - Cordoba'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/192030_1807508100191_4668721_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=NfvHd9VaxO8AX8AsrxI&_nc_ht=scontent.feze14-2.fna&oh=81f3329cdad306f8bcc428e4d1f109d6&oe=608F2AAE',
                label: 'Atardecer sobre las ruinas del casino',
                description: 'Tomada en Miramar - Cordoba'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/283216_2147848848497_6092032_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=BSQ-BdcZuvIAX93eLmp&_nc_ht=scontent.feze14-1.fna&oh=bd8487064819a0842df09c03b2c7024f&oe=6090CA33',
                label: 'Sol bajando por la montaña',
                description: 'Tomada en Penitentes - Mendoza'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/30131_1429293405060_7001354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=hs4SoJbFI9MAX-OoIoo&_nc_ht=scontent.feze14-2.fna&oh=cf3408f0ee7b7b60c3e01c6e45a1a534&oe=60902776',
                label: 'Guada mariposa',
                description: 'Intervención sobre una pintada en la pared'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/24809_1383660344262_497457_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=FdmbloDDd3IAX-KWrKZ&_nc_ht=scontent.feze14-1.fna&oh=b90b8ddff61b42473d929dbd28defdac&oe=608E6A91',
                label: 'Patitos en el cielo',
                description: 'Patos sobre un mar que refleja un cielo nublado, Ushuaia - Tierra del Fuego'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/24809_1383660424264_6351121_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=Gx09uPJjHvwAX98XTKf&_nc_ht=scontent.feze14-2.fna&oh=e26506ee0ecfb29e3881bea5f5e905eb&oe=608F12BA',
                label: 'Lupinos del sur',
                description: 'Postal tomada en Ushuaia - Tierra del Fuego '
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/4185_1155632563710_6449990_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=qw-h1wsh-IAAX_fTxmw&_nc_ht=scontent.feze14-1.fna&oh=adc46a7327fdb5e309364f906bd1c2a2&oe=608FA7ED',
                label: 'Atardecer en el campo',
                description: 'Tomada en Los Cocos - Cordoba'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/10391768_1279492180123_2285898_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=J3Iu8bYLcNcAX8Lw0RA&_nc_ht=scontent.feze14-2.fna&oh=ae506cba24586a82fac7f4c37f068de5&oe=608CEB4B',
                label: 'Castor sobre río perlado',
                description: 'Tomada en Villa Elisa - Entre Ríos'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/24809_1386673499589_7139130_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=KtekOOuinrUAX90nciz&_nc_ht=scontent.feze14-2.fna&oh=3e6309048f08930ba0164d3f07b0d1d8&oe=609040CF',
                label: 'Marco del glaciar',
                description: 'Composición de colores en el glaciar Perito Moreno - Río Gallegos'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/24809_1385762076804_6876209_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=UM2tQ6CG8lkAX-vGbF5&_nc_ht=scontent.feze14-1.fna&oh=eeb81e83b070f0da9a8f1f88fb2385b4&oe=608E77F5',
                label: 'Chapoteando en ekl agua',
                description: 'Flamencos rosados sobre el mar en Ushuaia - Tierra del Fuego'
            }
        ];

        let bdH = [

            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/1485958_10201949937882774_545896172_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=19026a&_nc_ohc=8YDktQ_KhmMAX_7pS95&_nc_ht=scontent.feze14-2.fna&oh=ec2f6d368dc09e584575802ac5a91b3d&oe=608FC5C8',
                label: 'Colgante de Uros',
                description: 'Foco diferenciado sobre colgante de la isla de Uros'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/412579_4561393705610_1407173791_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=_QO83-Sv7fYAX_jSCIC&_nc_ht=scontent.feze14-2.fna&oh=76b35c7c4f9e5fcc75d714067a2bb4e5&oe=6090B8E1',
                label: 'Selva misionera en el parque nacional Iguazú',
                description: 'Arbol cubierto de follaje verde desde una pasarela, Iguazú - Misiones'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t31.18172-8/740339_4703101968228_2062279087_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=19026a&_nc_ohc=Jly29qmbw08AX-xocJ1&_nc_ht=scontent.feze14-1.fna&oh=3df714e5093b9bdb88be98fe0125b11c&oe=608F4B66',
                label: 'Helada sobre el río',
                description: 'Capa de hielo resquebrajandose, San Rafael - Mendoza'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t31.18172-8/706339_4502091023080_287254840_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=19026a&_nc_ohc=WO3DgBlTxEYAX8Of7nB&_nc_ht=scontent.feze14-1.fna&oh=db9e016eddb85ba59c23475ee8d9950e&oe=608EC0A9',
                label: 'Volviendo de playa del toro',
                description: 'Camino arbolado volviendo al muelle en isla Victoria, San Carlos de Bariloche - Rio Negro'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t1.18169-9/24809_1383660584268_599496_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=WQBLoNwEItUAX_4JJZk&_nc_ht=scontent.feze14-2.fna&oh=be8405f540288c931ab32161d3ef4363&oe=608D9F36',
                label: 'Estibadores sobre el mar',
                description: 'Puerto de Ushuaia en blanco y negro - Tierra del Fuego'
            }
        ];

        let bdV2 = [
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/1914392_1213329846106_7427621_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=dwzDLpo_ploAX85ZqeT&_nc_ht=scontent.feze14-1.fna&oh=753c45dfafdba928daa19378fce0287b&oe=608EBF87',
                label: 'Movimiento en la procesión',
                description: 'Paneo del traslado de la cruz durante la procesión, Bernal'
            },
            {
                url: 'https://scontent.feze14-1.fna.fbcdn.net/v/t1.18169-9/32538_1407302095291_900802_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=de6eea&_nc_ohc=CsJyv9U59_cAX8ZrcZc&_nc_ht=scontent.feze14-1.fna&oh=c9b438bb380e733972243455a3d5c7f5&oe=608D078A',
                label: 'Color Frío Dominante',
                description: 'Composición en un frío desierto, canalizando energías. Modelo: Cristian'
            },
            {
                url: 'https://scontent.feze14-2.fna.fbcdn.net/v/t31.18172-8/193424_1807507900186_2248676_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=RWWwdPo8SlAAX_66c0I&_nc_ht=scontent.feze14-2.fna&oh=2ccf7a5966d12015572e931641a55058&oe=608F5E48',
                label: 'Insectos en la hora de la siesta',
                description: 'Barrido del movimiento de insectos tomada en Miramar - Cordoba'
            }
        ];

        setArtistic(bd);
        setArtisticH(bdH);
        setArtisticV2(bdV2);
        setArtisticV(bdV);
    }, []);

    return (

        <div>
            <div style={{
                backgroundImage: `url(${bkpic})`,
            }}>
                <div className="hslprofile"
                >
                    ARTISTIC
                    </div>
                <div /* style={{ display: "flex" }} */>
                    <div style={{ width: '90%'/* , flex: 1 */, marginLeft: "5%", marginRight: "5%" }}>
                        <Carousel showArrows={true} >
                            {artistic.map((art, index) =>
                                <div>
                                    <img src={art.url} alt={art.label}/* style={{ maxHeight: '30%' }} */ />
                                    <p className="legend">{art.description}</p>
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: '41%'/* , flex: 1 */, marginLeft: "2%", marginRight: "6%" }}>
                            <Carousel showArrows={true} >
                                {artisticV.map((art, index) =>
                                    <div>
                                        <img src={art.url} alt={art.label}/>
                                        <p className="legend">{art.description}</p>
                                    </div>
                                )}
                            </Carousel>
                        </div>
                        <div style={{ width: '49%'/* , flex: 1 */, marginLeft: "0%", marginRight: "2%" }}>
                            <Carousel showArrows={true} >
                                {artisticV2.map((art, index) =>
                                    <div>
                                        <img src={art.url} alt={art.label}/>
                                        <p className="legend">{art.description}</p>
                                    </div>
                                )}
                            </Carousel>
                        </div>
                    </div>
                    <div style={{ width: '98%'/* , flex: 1 */, marginLeft: "1%", marginRight: "1%" }}>
                        <Carousel showArrows={true} >
                            {artisticH.map((art, index) =>
                                <div>
                                    <img src={art.url} alt={art.label}/* style={{ maxHeight: '50vw' }} */ />
                                    <p className="legend">{art.description}</p>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ARTISTIC;