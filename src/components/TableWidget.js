import TableRow from "./TableRow";

function TableWidget(props) {
  return (
    <div>
      <table className="MyTable" id="topTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <TableRow name={"Phone"} price={100} addBasket={props.addBasket}/>
          <TableRow name={"Computer"} price={250} addBasket={props.addBasket}/>
          <TableRow name={"Car"} price={1000} addBasket={props.addBasket}/>
        </tbody>
      </table>
    </div>
  );
}

export default TableWidget;
