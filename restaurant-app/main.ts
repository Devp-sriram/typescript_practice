interface Menu{
    id : number,
    name : string,
    price : number,
}
interface Queue{
    id:number,
    pizza:Menu,
    status: "ordered" | "completed",
}

let cashInRegister : number = 100
let nextOrderId : number = 1
const orderQueue :Queue[]= []    


const menu : Menu[] = [
    { id: nextOrderId++, name: "Margherita", price: 8 },
    { id: nextOrderId++, name: "Pepperoni", price: 10 },
    { id: nextOrderId++, name: "Hawaiian", price: 10 },
    { id: nextOrderId++,name: "Veggie", price: 9 },
]

                                                        

function addNewPizza(pizzaObj :Omit<Menu,"id">):Menu{
    const newPizza : Menu= {
      id : nextOrderId++,
      ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

function placeOrder(pizzaName : string) : Queue | undefined {
    const selectedPizza : Menu | undefined = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(selectedPizza === undefined){
      console.error(`${pizzaName} is not in gthe menu`);
      return 
    }
    cashInRegister += selectedPizza?.price
    const newOrder : Queue = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function addToArray<Type>(array :Type[], item:Type):Type[] {
    array.push(item)
    return array
}

// example usage:
addToArray(menu, {id: nextOrderId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })


function completeOrder(orderId : number) : Queue | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if(!order){
       console.error(`${orderId} doesn't exist`)
       return 
    } 
    order.status = "completed"
    return order
}

function getPizzaDetails(identifier : string|number): Menu | undefined {
  if(typeof identifier === "string"){
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  }else if(typeof identifier === "number"){
    return menu.find(pizza => pizza.id === identifier) 
  }else{
    throw new TypeError(`parameter identifier`);
  }
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)
