import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  #moviesService: MoviesService;
  constructor(readonly moviesService: MoviesService) {
    this.#moviesService = moviesService;
  }

  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('title') movieTitle: string) {
    return `We are searching for a movie with a title: ${movieTitle}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
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
