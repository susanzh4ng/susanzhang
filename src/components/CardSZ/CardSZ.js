import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiDiamondsFourFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom'
import "./CardSZ.css";

function CardSZ(props){
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/susanzhang/projects/${props.url}`);
    }

    return(
        <div className='Card' onClick={handleClick}>
            <Row className='Row'>
                <Col md={6}>
                    <img src={props.coverImg} alt="Hero" className="img-fluid coverImg"/>
                </Col>
                <Col md={6}>
                    <span className="d-inline-flex align-items-center">
                        <PiDiamondsFourFill size="35" className="me-1" />
                        <p className="title"><i>{props.title}</i> {props.subtitle}</p>
                    </span>
                    <p className="description">{props.description}</p>
                    <i className="category">{props.category}</i>
                </Col>
            </Row>
        </div>
    )
}

export default CardSZ