import { pbkdf2Sync } from 'node:crypto';
export function derive(id: string, iterations: number): string {
  return pbkdf2Sync('ci-lab:' + id, 'frozen-workload-v1', iterations, 32, 'sha256').toString('hex');
}
