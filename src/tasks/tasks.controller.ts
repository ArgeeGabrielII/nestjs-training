import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    console.log(`[TASK] createTaskDto: ${JSON.stringify(createTaskDto)}`);
    return this.tasksService.createTask(createTaskDto);
  }

  @Post('/:id')
  deleteTaskById(@Param('id') id: string): void {
    this.tasksService.deleteTaskById(id);
  }
}
