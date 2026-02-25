import { useState } from "react";
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    if (!name.trim()) return;

    const newItem = {
      id: Date.now(),
      name,
      completed: false,
    };

    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="container">
      <h1>🛒 Shopping List Tracker</h1>

      <AddItem addItem={addItem} />

      <ShoppingList
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default App;