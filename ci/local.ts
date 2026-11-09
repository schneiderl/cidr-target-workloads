import { fixture, plan, sha } from './requirements.ts';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { execute } from '../tests/inventory.ts';
const data = readFileSync('node_modules/.cidr/prepared-index.json', 'utf8');
assert.equal(sha(data), fixture.dependencyDigest);
const prepared = JSON.parse(data);
for (const id of plan.partitions.flat()) execute(id, fixture.iterations, fixture.tests[id], prepared[Number(id.slice(-3)) % prepared.length]);
console.log('Passed ' + Object.keys(fixture.tests).length + ' protected tests.');
