import Button from "./Button";

export default function FriendList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          image={friend.image}
          name={friend.name}
          key={friend.id}
          balance={friend.balance}
          onSelect={onSelect}
          friend={friend}
          selFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ image, name, balance, onSelect, friend, selFriend }) {
  const isSelect = friend.id === selFriend?.id;
  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You own {name} {Math.abs(balance)}€
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}€
        </p>
      )}

      <Button onBtnClick={() => onSelect(friend)}>
        {isSelect ? "Close" : "Select"}
      </Button>
    </li>
  );
}
