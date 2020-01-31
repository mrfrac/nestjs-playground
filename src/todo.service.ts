import { Injectable } from "@nestjs/common";

export interface ITodoItem {
    text: string;
    completed: boolean;
}

@Injectable()
export class TodoService {
    private readonly todos: ITodoItem[] = [{
        text: "Todo #1",
        completed: false
    }, {
        text: "Todo #2",
        completed: true
    }];

    public findAll(): ITodoItem[] {
        return this.todos;
    }

    public getOne(id: number): ITodoItem | undefined {
        return this.todos[id] ? this.todos[id] : undefined;
    }

    public create(item: ITodoItem) {
        this.todos.push(item);
    }
}