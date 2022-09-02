function TableRow(props) {
    function handleClick(){

        props.addBasket(props.name, props.price)
    }
    return ( 
        <tr >
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><button className="AddBasketButton" onClick={handleClick}>🛒 Add to Cart</button></td>
        </tr>
     );
}

export default TableRow;