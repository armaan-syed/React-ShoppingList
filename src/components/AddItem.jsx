import { useState } from "react";

function AddItem({ addItem }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(input);
    setInput("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add grocery item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddItem;