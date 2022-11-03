import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
        <div onClick={() => props.handleShow(false)} >HOME</div>
        <div>STORE</div>
        <div>ABOUT</div>
        <div onClick={() => props.handleShow(true)}> CART
            <sup> {props.count} </sup>
        </div>
    </div>
    );
}

export default Header;