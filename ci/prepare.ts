import { mkdirSync, writeFileSync } from 'node:fs';
import { fixture, sha } from './requirements.ts';
import { prepare } from '../vendor/prepared-index/index.ts';
import assert from 'node:assert/strict';
const output = JSON.stringify(prepare(fixture.preparation.rows, fixture.preparation.iterations)) + '\n';
assert.equal(sha(output), fixture.dependencyDigest);
mkdirSync('node_modules/.cidr',{recursive:true});
writeFileSync('node_modules/.cidr/prepared-index.json',output);
