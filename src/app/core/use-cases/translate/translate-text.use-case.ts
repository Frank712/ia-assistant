import type { TranslateTextResponse } from '@interfaces/index';
import { environment } from 'environments/environment.development';

export const translateTextUseCase = async (prompt: string, lang: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, lang }),
    });

    console.log('resp =>', resp);

    if (!resp.ok) {
      throw new Error(JSON.stringify(resp));
    }

    const { message } = (await resp.json()) as TranslateTextResponse;
    return {
      ok: true,
      message: message,
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      message: 'No se pudo realizar la traduccíon',
    };
  }
};
