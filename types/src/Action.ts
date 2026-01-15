import type { SDKConfig } from './SDKConfig';

export interface Action<Payload extends (Record<string, string | boolean | number> & SDKConfig) | undefined = {}> {
  id: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  payload?: Payload;
}
