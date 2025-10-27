import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiStorefrontFill, PiPenNibFill, PiCircuitry } from "react-icons/pi";
import { useNavigate } from 'react-router-dom'
import "./CardSZ.css";

function CardSZ(props){
    const navigate = useNavigate();
    function handleClick() {
            if (props.url.startsWith("http")) {
                window.open(props.url, "_blank", "noopener,noreferrer");
            } else {
                navigate(`/susanzhang/work/${props.url}`);
            }
        setTimeout(() => {
            const target = document.getElementById(`${props.urlid}`);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
    }

    return(
        <div className='Card' onClick={handleClick}>
            <Row className='Row'>
                <Col md={6}>
                    <img src={props.coverImg} alt="Hero" className="img-fluid coverImg"/>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center mt-2 mt-md-0 text">
                    <span className="d-inline-flex align-items-center">
                        {props.marketingPage && <PiStorefrontFill size="25" className="me-1" />}
                        {props.uiuxPage && <PiPenNibFill size="25" className="me-1" />}
                        {props.fullStackPage && <PiCircuitry size="25" className="me-1" />}
                        <b>{props.title}</b>
                    </span>
                    <p className="description">{props.description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default CardSZ