import FriendList from "./FriendList";
import Button from "./Button";
import AddFriend from "./AddFriend";
import SplitForm from "./SplitForm";
import { useState } from "react";

let friends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openAddFriend() {
    setIsOpen(!isOpen);
  }

  function handleAddFriend(friend) {
    friends = [...friends, friend];
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {isOpen && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onBtnClick={openAddFriend}>
          {!isOpen ? "AddFriend" : "Close"}
        </Button>
      </div>
      <SplitForm />
    </div>
  );
}
