import { Injectable } from '@nestjs/common';

import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  #movies: Movie[] = [];
}
