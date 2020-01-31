import { Controller, Get, Param, HttpStatus, Res, Post, Body } from "@nestjs/common";
import { Response } from "express";
import { TodoService, ITodoItem } from "./todo.service";

@Controller("todos")
export class TodoController {

    public constructor(private readonly todoService: TodoService) {}

    @Get()
    public findAll(): ITodoItem[] {
        return this.todoService.findAll();
    }

    @Get(":id")
    public getOne(@Param("id") id: string, @Res() res: Response) {
        const item = this.todoService.getOne(parseInt(id, 10));
        if (item) {
            res.status(HttpStatus.OK).json(item);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    public create(@Body() body: ITodoItem) {
        this.todoService.create(body);
        return body.text ? body.text : "Ok";
    }
}