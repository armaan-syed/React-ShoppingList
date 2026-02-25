import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, deleteItem, toggleItem }) {
  if (items.length === 0) {
    return <p className="empty">No items yet 🧠</p>;
  }

  return (
    <div className="list">
      {items.map((item, index) => (
        <ShoppingItem
          key={item.id}
          index={index + 1}
          item={item}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
}

export default ShoppingList;