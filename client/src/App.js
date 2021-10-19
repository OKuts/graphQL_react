import './App.css';
import {useState} from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <form>
        <input type="text"/>
        <input type="text"/>
        <div className="btns">
          <button>create</button>
          <button>get</button>
        </div>
        <div>
          {users.map(user => <div className="user">{user.id}. {user.name} {user.age}</div>)}
        </div>
      </form>
    </div>
  );
}

export default App;
