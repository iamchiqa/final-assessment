import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Uji full coverage fungsi sum.
describe('Sum function', () => {
  // Not a number cases
  // Menguji saat nilai a adalah string, yakni teks sehingga hasil harus bernilai nol.
  it('should return 0 if the first argument is not a number', () => {
    assert.strictEqual(sum('seven', 4), 0);
  });

  // Menguji saat nilai b berupa string sehingga hasil harus bernilai nol.
  it('should return 0 when the second argument is not a number', () => {
    assert.strictEqual(sum(4, '9'), 0);
  });

  // Menguji saat nilai a dan b bukan angka, jadi hasil harus bernilai nol.
  it('should correctly return 0 for two non-number arguments', () => {
    assert.strictEqual(sum('four', '6'), 0);
  });

  // Negative cases
  // Menguji saat a bernilai negatif sehingga hasil harus bernilai nol.
  it('should return 0 if the first argument is negative', () => {
    assert.strictEqual(sum(-6, 11), 0);
  });

  // Menguji saat nilai b itu negatif, jadi hasil harus bernilai nol.
  it('should return 0 when the second argument is negative', () => {
    assert.strictEqual(sum(11, -6), 0);
  });

  // Menguji saat nilai a dan b negatif sehingga hasil harus bernilai nol.
  it('should correctly return 0 when both numbers are negative', () => {
    assert.strictEqual(sum(-6, -29), 0);
  });

  // Positive cases
  // Menguji penjumlahan dua angka positif yang menghasilkan nilai normal.
  it('should add two positive numbers correctly', () => {
    assert.strictEqual(sum(4, 11), 15);
  });

  // Menguji penjumlahan dua angka positif berbentuk desimal.
  it('should calculate positive decimal numbers correctly', () => {
    assert.strictEqual(sum(2.25, 3.75), 6);
  });

  // Zero cases
  // Menguji penjumlahan saat nilai a adalah nol dan b itu positif.
  it('should keep the second value when the first argument is zero', () => {
    assert.strictEqual(sum(0, 11), 11);
  });

  // Menguji penjumlahan saat nilai a itu positif dan b berupa nol.
  it('should handle the second argument as zero correctly', () => {
    assert.strictEqual(sum(53, 0), 53);
  });

  // Menguji penjumlahan saat a dan b bernilai nol.
  it('should return 0 when both arguments are zero', () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});