import { Controller, Get, Param, HttpStatus, Res, Post, Body, HttpException } from "@nestjs/common";
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
            return item;
        }

        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    @Post()
    public create(@Body() body: ITodoItem) {
        this.todoService.create(body);
        return body.text ? body.text : "Ok";
    }
}