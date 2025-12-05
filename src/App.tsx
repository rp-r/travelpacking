import "./index.css"
type Item = {

  id: number;
  description: string;
  quantity: number;
  packed: boolean
}


const initialItems: Item[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {


  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  )
}

function Logo() {

  return (
    <h1>🌡Far Away🚍</h1>
  )

}

function Form() {
  return (
    <div className="add-form">
      <h3>What you need for trip? </h3>
      <form>
        <select>
          <option value="1">1</option>
        </select>
        <input type="text"></input>
      </form>

    </div>)
}

function Packinglist() {
  return (<div className="list">


    List



  </div>)
}



function Stats() {

  return (
    <footer className="stats">
      <em> 🍩 You have selected X elements from the X list</em>

    </footer>)
}
export default App
