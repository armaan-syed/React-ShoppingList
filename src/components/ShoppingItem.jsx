function ShoppingItem({ item, deleteItem, toggleItem, index }) {
  return (
    <div className={`item ${item.completed ? "completed" : ""}`}>
      
      <span onClick={() => toggleItem(item.id)}>
        <strong>{index}. </strong>{item.name}
      </span>

      <button onClick={() => deleteItem(item.id)}>
        ❌
      </button>

    </div>
  );
}

export default ShoppingItem;