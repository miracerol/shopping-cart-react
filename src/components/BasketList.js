import BasketTile from "./BasketTile";

function BasketList(props) {
    return ( 
        props.list.length>0 ? 
        <div>
            <table className="MyTable">
                <tbody>
                    {props.list.map((item)=>{
                        return <BasketTile key={item.name} item={item} add={props.add} remove={props.remove}/>
                    })}
                </tbody>
            </table>
            
        </div> 
        : <h5>Your Cart is empty</h5>
    
     );
}

export default BasketList;