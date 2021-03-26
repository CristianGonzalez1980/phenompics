import {
    useParams
} from "react-router-dom";
import "../Styles.css";

const PROFILE = () => {
    let { col } = useParams();

    return (
        <div className="hsl"
            style={{
                background: col
            }}
        >
            PROFILE
        </div>
    );
}

export default PROFILE;