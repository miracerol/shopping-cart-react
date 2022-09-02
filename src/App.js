
import { useState } from 'react';
import './App.css';
import BasketList from './components/BasketList';
import TableWidget from './components/TableWidget';

function App() {
  const[basket,setBasket] = useState([])
  
  function addBasket(name, price){
    let copyBasket = [...basket];
    for(let i=0;i<basket.length;i++){
      if(basket[i].name===name){
        copyBasket[i].count+=1;
        copyBasket[i].total+=copyBasket[i].price;
        setBasket(copyBasket)
        return;
      }
    }
    copyBasket.push({name: name, price:price, count:1, total: price, id: basket.length});
    setBasket(copyBasket)
  }

  function removeBasket(name, price){
    let copyBasket = [...basket];
    for(let i=0;i<basket.length;i++){
      if(basket[i].name===name){
        copyBasket[i].count-=1;
        copyBasket[i].total-=copyBasket[i].price;
        if(copyBasket[i].count===0){
          copyBasket.splice(i,1);
        }
        setBasket(copyBasket)
        return;
      }
    }
  }
  function getTotal(){
    let totalPrice=0;
      basket.forEach(element => {
        totalPrice+=element.total;
      });
      return totalPrice;
  }
  return (
    <div className="App">
      <TableWidget addBasket={addBasket}/>
      <h1>Your Cart</h1>
      <BasketList list={basket} add={addBasket} remove={removeBasket}/>
      <h4>Total Price: {getTotal()}</h4>
      <button className='AddBasketButton' id='buy' onClick={()=>(setBasket([]))}>Buy</button>
    </div>
  );
}

export default App;
