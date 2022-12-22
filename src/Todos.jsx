import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function Todos(){

    const dispatch = useDispatch()

    const [text, setText] = useState()

    const todos = useSelector(state => state)

    const handleDelete = (index) =>{
        dispatch({
            type:'delete',
            payload:index
        })
    }

    const addTodo = () =>{
        dispatch({
            type: 'add',
            payload: text
        })
        setText('')

    }

    const hChange = (e) =>{
        setText(e.target.value)
    }

    return(
        <div>

            <div>
                <input type="text" value={text} onChange={hChange}/>

                <button onClick={addTodo}>
                    add
                </button>

            </div>

            <ul className="list-group w-50 m-auto">
            {todos.map((item, index) =>{
                return(
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        <div>
                            <input type="checkbox" checked={item.done} />
                        </div>

                        {item.text}

                        <button className="btn"
                        onClick={() => handleDelete(index)}
                        >
                            X
                        </button>
                    </li>
                )
            })}

        </ul>
        </div>
        
    )
}
export default Todos