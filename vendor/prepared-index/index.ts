import { pbkdf2Sync } from 'node:crypto';
export function prepare(rows: number, iterations: number): string[] {
  return Array.from({length:rows}, (_, i) => pbkdf2Sync('cidr-dependency:' + i, 'index-v1', iterations, 32, 'sha256').toString('hex'));
}
