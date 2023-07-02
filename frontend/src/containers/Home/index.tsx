import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { COOKIE_KEYS, getCookie, isUserLoggedIn, resetAllCookies } from '../../helpers/cookies'
import Header from './Header';
import Content from './Content';
import { Status, Todo, TodoService } from '../../services/TodoService';

import { AppContext, actions } from './../../context/index'
import Error from '../../components/Error';

const Home = () => {
  const { state, dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate('/login', { replace: true })
    } else {
      (async () => {
        await getTodo();
      })()
    }
  }, [])

  const getTodo = async () => {
    const res = await TodoService.getTodo();
    console.log('res - get', res);
    dispatch({ type: actions.GET, payload: res.data || [] })
  }

  const handleLogout = () => {
    resetAllCookies();
    navigate('/login');
  }

  const handleAddTodo = async (task: string) => {
    const USER_ID = getCookie(COOKIE_KEYS.USER_ID)
    const res = await TodoService.createTodo({ userId: USER_ID, task: task, status: Status.PENDING, createdAt: new Date().getTime() })
    console.log('res - add', res);
    dispatch({ type: actions.ADD, payload: res.data })
  }

  const handleUpdateTodo = async (todo: Todo) => {
    const res = await TodoService.updateTodo(todo)
    console.log('res - update', res);
    dispatch({ type: actions.UPDATE, payload: res.data })
  }

  const handleDeleteTodo = async (id: string | number | undefined) => {
    if (id !== undefined) {
      const res = await TodoService.deleteTodo(id)
      console.log('res - delete', res.data?._id);
      await getTodo()
    }
  }

  return (
    <div>
      <Header name={getCookie(COOKIE_KEYS.USER_NAME)} onLogout={handleLogout} />
      <Error message={state.error} />
      <Content todos={state.todo || []} addTodo={handleAddTodo} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default Home;
