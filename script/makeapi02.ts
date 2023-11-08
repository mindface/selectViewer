import * as fs from 'fs';
import fetch from 'node-fetch';

interface ApiConfig {
  endpoint: string;
  method: 'GET' | 'POST';
  schema: any;
}

const apiConfigurations: ApiConfig[] = [
  {
    endpoint: '/user',
    method: 'GET',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    },
  },
  {
    endpoint: '/info',
    method: 'GET',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    },
  },
];

const fileContent = apiConfigurations
  .map(({ endpoint, method, schema }) => {
    return `export const ${method}${endpoint.replace('/','_')} = (data: ${JSON.stringify(
      schema,
      null,
      2
    )}) => {
  return fetch('${endpoint}', {
    method: '${method}',
    ${ method === "POST" ? "body: JSON.stringify(data),":"" }
  });
};`;
  })
  .join('\n\n');

fs.writeFileSync('generatedApi.ts', fileContent);