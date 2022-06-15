import { db } from "./firebaseConfig";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const CRUD = () => {
  const [info, setInfo] = useState([]);
  const userRef = collection(db, "Users");

  const fetchUsers = async () => {
    const data = await getDocs(userRef);
    // setInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    const userData = [];

    data.forEach((doc) => {
      userData.push(doc.data());
    });

    setInfo(userData);
  };

  useEffect(() => {
    fetchUsers();
  }, [userRef]);

  const [newName, setNewName] = useState(" ");
  const [newEmail, setNewEmail] = useState(" ");
  const [newAge, setNewAge] = useState(" ");

  const createUser = async () => {
    await addDoc(userRef, {
      Username: newName,
      Email: newEmail,
      Age: newAge,
    });
  };

  const updateUser = async (id, Age) => {
    const userDoc = doc(db, "Users", id);
    const newFields = { Age: Age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "Users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="Container">
      <div className="Field">
        <input
          placeholder="Name"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        ></input>

        <input
          placeholder="Email"
          //type="email"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        ></input>

        <input
          placeholder="Age"
          //type="number"
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        ></input>
        <button onClick={createUser}>Create user</button>
      </div>
      <div className="Data">
        {info.map((user) => {
          return (
            <div className={"User"}>
              {" "}
              <p>Name: {user.Username}</p>
              <p>Email: {user.Email}</p>
              <p>Age: {user.Age}</p>
              <button
                onClick={() => {
                  updateUser(user.id, user.Age);
                }}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CRUD;
