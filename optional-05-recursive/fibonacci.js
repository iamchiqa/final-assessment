function fibonacci(n) {
  // Basis rekursi, stop di elemen ke-1.
  if (n === 0) {
    return [0];
  }

  // Stop rekursi di elemen ke-2, dan mengembalikan 2 angka awal.
  if (n === 1) {
    return [0, 1];
  }

  // Ambil deret sebelumnya.
  const previousSequence = fibonacci(n - 1);
  // Tambah elemen berikutnya.
  const nextValue = previousSequence[n - 1] + previousSequence[n - 2];
  // Buat array baru tanpa ubah deret sebelumnya.
  return [...previousSequence, nextValue];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
