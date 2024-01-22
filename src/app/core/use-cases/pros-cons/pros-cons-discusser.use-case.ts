import type { OrthographyResponse } from '@interfaces/orthography.response';
import { ProsConsResponse } from '@interfaces/pros-const-response';
import { environment } from 'environments/environment.development';

export const prosConsUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/pros-cons-discusser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    console.log('resp =>', resp);

    if (!resp.ok) {
      throw new Error(JSON.stringify(resp));
    }

    const data = (await resp.json()) as ProsConsResponse;
    return {
      ok: true,
      ...data,
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      role: null,
      content: '',
    };
  }
};
