import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from 'styled-components';

export type PropType = {
  addTodo: (task: string) => void
}

const CreateTodo = ({ addTodo }: PropType) => {
  const [task, setTask] = useState('')
  return (
    <CreateTodoWrapper>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { flex: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'flex', columnGap: 16 }}>
          <TextField
            required
            id="outlined-disabled"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              addTodo(task);
              setTask("")
            }}>Add</Button>
        </div></Box>
    </CreateTodoWrapper>
  )
}

export default CreateTodo;

const CreateTodoWrapper = styled.div`
  width: 50%;
  margin: 16px 0px;
  position: sticky;
  bottom: 24px;
  background-color: #fff;
`