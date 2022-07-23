import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This return all movies';
  }

  @Get('search')
  search(@Query('title') movieTitle: string) {
    return `We are searching for a movie with a title: ${movieTitle}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
