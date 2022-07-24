import { Injectable, NotFoundException } from '@nestjs/common';

import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  #movies: Movie[] = [];

  getAll() {
    return this.#movies;
  }

  getOne(id: string) {
    const movie = this.#movies.find((movie) => movie.id === Number(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.#movies = this.#movies.filter((movie) => movie.id !== Number(id));
  }

  create(movieData: CreateMovieDto) {
    this.#movies.push({
      id: this.#movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.#movies.push({ ...movie, ...updateData });
  }
}
