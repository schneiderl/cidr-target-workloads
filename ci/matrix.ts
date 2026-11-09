import { appendFileSync } from 'node:fs';
import { plan } from './requirements.ts';
const output = 'matrix=' + JSON.stringify({partition:plan.partitions.map((_, i) => i)}) + '\ncache=' + plan.cache + '\n';
if (!process.env.GITHUB_OUTPUT) throw new Error('GITHUB_OUTPUT required');
appendFileSync(process.env.GITHUB_OUTPUT, output);
