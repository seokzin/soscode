import { Injectable } from '@nestjs/common';

import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  #movies: Movie[] = [];

  getAll() {
    return this.#movies;
  }

  getOne(id: string) {
    return this.#movies.find((movie) => movie.id === Number(id));
  }

  deleteOne(id: string) {
    this.#movies.filter((movie) => movie.id !== Number(id));
  }

  create(movieData) {
    this.#movies.push({
      id: this.#movies.length + 1,
      ...movieData,
    });
  }
}
