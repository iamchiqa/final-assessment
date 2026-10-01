function factorial(n) {
  //  Basis rekursi faktorial, nilai 0! dan 1! = 1.
  if (n === 1 || n === 0) {
    return 1;
  } else if (n > 1) {
    // recursif dengan n * (n-1)!
    return n * factorial(n - 1);
  } else {
    // Mengembalikan 0, jika n = negatif.
    return 0;
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
