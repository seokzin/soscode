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
}
