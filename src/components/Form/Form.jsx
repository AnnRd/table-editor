import { Button } from '../Button/Button';
import s from './Form.module.css';

export function Form(props) {
    const { inputValue, users, editableUserData: { isEdit, userIndex }, setInputValue, setUser, setEditableUserData } = props;
    
    const formHandler = (event) => {
        event.preventDefault();

        if (isEdit) {
            const editedUser = users;
            editedUser.splice(userIndex, 1, inputValue)

            setUser(editedUser)
            setEditableUserData({
                isEdit: false,
                userIndex: null,
            })

        } else {
            setUser((prevState) => [...prevState, { name: inputValue.name, value: inputValue.value, id: users.length + 1 }]);
        }

        setInputValue({
            name: '',
            value: '',
        })
    }

    const textAreaHandler = (event) => {
        setInputValue(JSON.parse(event.target.value))
    }

    return (
        <form onSubmit={formHandler}>
          <textarea value={JSON.stringify(inputValue)} onChange={textAreaHandler}></textarea>

          <div className={s.buttonWrapper}>
            <Button buttonType={'add'} isDisabled={!inputValue.name && !inputValue.value} buttonText={isEdit ? <span>Сохранить</span> : <span>Добавить</span>}/>
          </div>
        </form>
    )
}