import type { APIRoute } from 'astro';
import { buildLlmsTxt, textResponse } from '../i18n/llms';

export const GET: APIRoute = async () => textResponse(await buildLlmsTxt());
