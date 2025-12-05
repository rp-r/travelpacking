import { useState, type MouseEventHandler } from "react";
import "./index.css"
type Item = {

  id: number;
  description: string;
  quantity: number;
  packed: boolean
}


const initialItems: Item[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },


];
function App() {
  const [items, setItems] = useState<Item[]>(initialItems);


  function handleAddItems(item: Item) {

    setItems((items) => [...items, item]);
  }


  function handleDeleteItems(id: any) {

    setItems(items => items.filter(item => item.id !== id))

  }



  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packinglist items={items} onDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  )
}

function Logo() {

  return (
    <h1>🌡Far Away🚍</h1>
  )

}

function Form({ onAddItems }: any) {

  const [description, setDescription] = useState("");
  const [quantity, setQuatity] = useState(0);






  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem =
    {
      quantity, description, packed: false, id: Date.now()
    }


    console.log(newItem)
    onAddItems(newItem);

    setDescription("");
    setQuatity(1);
  }


  return (
    <div className="add-form" >
      <h3>What you need for trip? </h3>
      <form onSubmit={handleSubmit}>

        <select value={quantity} onChange={(e) => setQuatity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => <option value={item} key={item}>{item}</option>)}

        </select>
        <input type="text" placeholder=' item..' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>add</button>


      </form>

    </div>)
}

function Packinglist({ items, onDeleteItems }: any) {
  return (<div className="list">

    <ul> {items.map((item: any) => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />)}
    </ul>




  </div>)
}


function Item({ item, onDeleteItems, }: { item: Item; onDeleteItems: (id: number) => void; }) {

  return (<>
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}&nbsp;{item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>💕</button>

    </li></>)
}



function Stats() {

  return (
    <footer className="stats">
      <em> 🍩 You have selected X elements from the X list</em>

    </footer>)
}
export default App
