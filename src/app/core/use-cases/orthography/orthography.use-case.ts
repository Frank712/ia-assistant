import type { OrthographyResponse } from '@interfaces/orthography.response';
import { environment } from 'environments/environment.development';

export const orthographyUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/orthography-check`, {
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

    const data = (await resp.json()) as OrthographyResponse;
    return {
      ok: true,
      ...data,
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: 'No se pudo realizar la corección',
    };
  }
};
