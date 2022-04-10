import { Todo } from '../models/models';

//Export to create method. This acts like an endpoint
//that we'll be able to create from our web app.
export function create(task: string):Todo {
    // use the Todo class to persist the todo data.
    return Todo.insert(task)
}