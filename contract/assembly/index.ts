import { Todo, PartialTodo } from '../models/models';

//Export to create method. This acts like an endpoint
//that we'll be able to create from our web app.
export function create(task: string):Todo {
    // use the Todo class to persist the todo data.
    return Todo.insert(task)
}

export function getById(id: u32):Todo {
    return Todo.findById(id);
}

export function get(offset:u32, limit:u32 = 10): Todo[]{
    return Todo.find(offset, limit);
}

export function update(id: u32, partialTodo: PartialTodo): Todo{
    return Todo.findByIdAndUpdate(id, partialTodo);
}

export function del(id: u32): void{
    Todo.findByIdAndDelete(id);
}