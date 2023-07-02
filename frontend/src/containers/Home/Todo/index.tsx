import React from 'react'
import { Status, Todo } from '../../../services/TodoService'
import { IconWrapper, TodoWrapper } from './index.styled'
import { BsCheckSquareFill, BsCheckSquare } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

export type PropType = {
  todo: Todo;
  update: (todo: Todo) => void;
  deleteItem: (id: string|number|undefined) => void;
}

const TodoItem = ({ todo, deleteItem, update, }: PropType) => {


  const updateTodo = () => [
    update({
      ...todo,
      status: todo.status === Status.DONE ? Status.PENDING : Status.DONE
    })
  ]

  return (
    <TodoWrapper>
      <p>{todo.task}</p>
      <IconWrapper>
        {
          todo.status === Status.DONE ? <BsCheckSquareFill style={{ cursor: 'pointer' }} onClick={updateTodo} /> : <BsCheckSquare style={{ cursor: 'pointer' }} onClick={updateTodo} />
        }
        <AiFillDelete style={{ cursor: 'pointer' }} onClick={() => deleteItem(todo._id)} />
      </IconWrapper>
    </TodoWrapper>
  )
}

export default TodoItem;
