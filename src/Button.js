export default function Button({ children, onBtnClick }) {
  return (
    <button className="button" onClick={onBtnClick}>
      {children}
    </button>
  );
}
