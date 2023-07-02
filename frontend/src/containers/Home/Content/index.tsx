import React, { useState } from "react";
import { ContentWrapper, FilterContainer, Todos } from "./index.styled";
import { Status, Todo } from "../../../services/TodoService";
import TodoItem from "../Todo";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreateTodo from "../CreateTodo";

export type PropType = {
    todos: Todo[];
    addTodo: (task: string) => void,
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string | number | undefined) => void,
}

const Content = ({ todos, addTodo, updateTodo, deleteTodo }: PropType) => {
    const [selectedStatus, setSelectedStatus] = useState<Status | string>("")
    return <ContentWrapper>
        <FilterContainer>
            <FormControl fullWidth>
                <Select
                    value={selectedStatus}
                    label="Age"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >
                    <MenuItem value={""}>Select</MenuItem>
                    <MenuItem value={Status.PENDING}>Pending</MenuItem>
                    <MenuItem value={Status.DONE}>Done</MenuItem>
                </Select>
            </FormControl>
        </FilterContainer>
        <Todos>
            {todos.filter((it) => {
                return it.status === selectedStatus || selectedStatus === ""
            }).map(it => {
                return <TodoItem key={it._id} todo={it} update={updateTodo} deleteItem={deleteTodo} />
            })}
        </Todos>
        <CreateTodo addTodo={addTodo} />
    </ContentWrapper>;
};

export default Content;
