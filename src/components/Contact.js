import {
    useParams
} from "react-router-dom";
import "../Styles.css";

const CONTACT = () => {
    let { col } = useParams();

    return (
        <div className="hsl"
            style={{
                background: col
            }}
        >
            CONTACT
        </div>
    );
}

export default CONTACT;