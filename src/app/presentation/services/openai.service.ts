import { Injectable } from '@angular/core';
import {
  orthographyUseCase,
  prosConsStreamUseCase,
  prosConsUseCase,
  translateTextUseCase,
} from '@use-cases/index';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  constructor() {}

  checkOrthography(prompt: string) {
    return from(orthographyUseCase(prompt));
  }

  prosConsDiscusser(prompt: string) {
    return from(prosConsUseCase(prompt));
  }

  prosConsDiscusserStream(prompt: string, abortSignal: AbortSignal) {
    return prosConsStreamUseCase(prompt, abortSignal);
  }

  translateText(prompt: string, lang: string) {
    return from(translateTextUseCase(prompt, lang));
  }
}
