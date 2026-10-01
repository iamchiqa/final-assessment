import { describe, test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Pengujian operasi dasar matematika untuk penjumlahan menggunakan fungsi sum.
describe('Basic operations with sum function', () => {
  // Menguji penjumlahan dua angka positif berbeda nilai.
  test('sum should return 14 when adding 6 and 8', () => {
    assert.strictEqual(sum(6, 8), 14);
  });

  // Menguji apakah fungsi sum bisa menjumlahkan dua bilangan negatif dengan benar.
  test('sum should return -16 when adding -7 and -9', () => {
    assert.strictEqual(sum(-7, -9), -16);
  });

  // Menguji penjumlahan angka positif dengan angka negatif.
  test('sum should correctly add numbers with different signs', () => {
    assert.strictEqual(sum(12, -5), 7);
  });

  // Menguji apakah sum tetap menghasilkan nilai yang sama saat ditambah nol.
  test('sum should keep the original value when adding zero', () => {
    assert.strictEqual(sum(13, 0), 13);
  });

  // Menguji hasil penjumlahan dari dua bilangan desimal.
  test('sum should calculate decimal values correctly', () => {
    assert.strictEqual(sum(1.75, 0.25), 2);
  });
});