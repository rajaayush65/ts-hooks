import { useContext, useState } from "react";
import UserContext, { UserState } from "../store/store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Akash",
    last: "Kumar",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => {
        setUser({
            first:"Aman",
            last:"Kr"
        })
      }}>Change Context</button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
