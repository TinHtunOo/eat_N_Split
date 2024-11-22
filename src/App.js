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
  const [newAddFriend, setNewFriend] = useState(friends);
  const [selectedFriend, setSelect] = useState(null);
  const [showForm, setShowForm] = useState(false);
  function openAddFriend() {
    setIsOpen(true);
  }

  function handleAddFriend(friend) {
    setNewFriend((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  function handleSelect(friend) {
    setSelect((curfri) => (curfri?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={newAddFriend}
          onSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
        {isOpen && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onBtnClick={openAddFriend}>
          {!isOpen ? "AddFriend" : "Close"}
        </Button>
      </div>
      {showForm && <SplitForm />}
    </div>
  );
}
