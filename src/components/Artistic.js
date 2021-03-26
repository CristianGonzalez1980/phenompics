import {
    useParams
} from "react-router-dom";
import "../Styles.css";

const ARTISTIC = () => {
    let { col } = useParams();

    return (
        <div className="hsl"
            style={{
                background: col
            }}
        >
            ARTISTIC
        </div>
    );
}

export default ARTISTIC;