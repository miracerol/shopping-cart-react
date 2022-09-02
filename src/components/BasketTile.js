function BasketTile(props) {

  return (
        <tr>
            <td>Product Name: <span className="ProductName">{props.item.name}</span></td>
            <td>Product Price: <spa className="ProductPrice">{props.item.price}</spa></td>
            <td>
                Product Count: 
                <button className="CountButton" onClick={()=>(props.remove(props.item.name,props.item.price))}>➖</button>
                  {props.item.count}  
                <button className="CountButton" onClick={()=>(props.add(props.item.name,props.item.price))}>➕</button>
                </td>
            <td>Total Price: {props.item.total}</td>
        
        </tr>

  );
}

export default BasketTile;
