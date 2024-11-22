import Button from "./Button";
export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>split the bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♀️ Your expense</label>
      <input type="text" />
      <label>👫 X's expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
