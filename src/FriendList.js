import Button from "./Button";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend image={friend.image} name={friend.name} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ image, name }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>jdsljsdjfsldjf;sdkf</p>
      <Button>Select</Button>
    </li>
  );
}
