import { useState } from "react";
import { Form } from "../Form/Form";
import { Table } from "../Table/Table";
import s from './App.module.css';

function App() {
  const [user, setUser] = useState([
    {
      id: 1, name: 'Кепка', value: '100р'
    },
    {
      id: 2, name: 'Куртка', value: '200р'
    },
    {
      id: 3, name: 'Шляпа', value: '500р'
    },
    {
      id: 4, name: 'Кувалда', value: '333р'
    }
  ]);

  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null,
  })

  
  const [inputValue, setInputValue] = useState({
    name: '',
    value: '',
  });

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Table users={user} setEditableUserData={setEditableUserData} setInputValue={setInputValue} setUser={setUser}/>
        <div>
          <Form editableUserData={editableUserData} users={user} inputValue={inputValue} setEditableUserData={setEditableUserData} setInputValue={setInputValue} setUser={setUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;