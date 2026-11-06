import type { APIRoute } from 'astro';
import { buildLlmsFullTxt, textResponse } from '../i18n/llms';

export const GET: APIRoute = async () => textResponse(await buildLlmsFullTxt());
