import { PersistentUnorderedMap, math } from 'near-sdk-as';

//Think of this PersistentUnorderedMap like a database table.
//We'll use this to persist and retrieve data.
export const todos = new PersistentUnorderedMap<u32, Todo>('todos')

@nearBindgen
export class PartialTodo {
    task: string;
    done: bool;
}

//Think of this like a model class in something like mongoose or 
//sequelize. It defines the shape or schema for our data. It will
//also contain static methods to read and write data from and to
//the todos PersistentnUnorderedMap.
@nearBindgen
export class Todo {
    id: u32;
    task: string;
    done: bool;

    constructor(task: string){
        this.id = math.hash32<string>(task);
        this.task = task;
        this.done = false
    }

    static insert(task: string): Todo {
        //Create a new todo
        const todo = new Todo(task);

        //add the todo the persistentUnorderedMap
        // where the key is the todo's id and the value
        // is the todo itself. Think of this like an
        // insert statement in sql.
        todos.set(todo.id, todo);

        return todo;
    }

    static findById(id: u32): Todo{
        //Lookup a todo in the persistentUnorderedMap by its id.
        // This is like a SELECT * FROM todos WHERE id = ?
        return todos.getSome(id);
    }

    static find(offset: u32, limit: u32): Todo[]{
        //the PersistentUnorderedMap values method will
        //takes two parameters: start and end. We'll start
        //at the offset (skipping all todos before the offset)
        //and collect all todos until we reach the offset + limit
        //todo. For example, if offset is 10 and limit is 3 then
        //this would return the 10, 11, 12 todo.
        return todos.values(offset, offset + limit);
    }

    static findByIdAndUpdate(id: u32, partialTodo: PartialTodo): Todo{
        //Find a todo by its id
        const todo = this.findById(id);

        //Update the todo's task and done properties
        todo.task = partialTodo.task;
        todo.done = partialTodo.done;

        //persist the updated todo
        todos.set(todo.id, todo);

        return todo;
    }
} 
