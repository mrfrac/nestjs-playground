import { Controller, Get, Param, HttpStatus, Res, Post, Body } from "@nestjs/common";
import { Response } from "express";

interface ITodoItem {
    text: string;
    completed: boolean;
}

const todoItems: ITodoItem[] = [{
    text: "Todo #1",
    completed: false
}, {
    text: "Todo #2",
    completed: true
}];

@Controller("todos")
export class TodoController {
    @Get()
    public findAll(): ITodoItem[] {
        return todoItems;
    }

    @Get(":id")
    public getOne(@Param("id") id: string, @Res() res: Response) {
        const index = parseInt(id, 10);
        if (todoItems[index]) {
            res.status(HttpStatus.OK).json(todoItems[index]);
            // return todoItems[index];
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    public create(@Body() body: ITodoItem) {
        throw new Error("qqqq")
        return body.text ? body.text : "Ok";
    }
}