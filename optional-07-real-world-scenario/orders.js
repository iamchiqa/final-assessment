// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
// Inisialisasi variabel orders as array kosong untuk menyimpan seluruh pesanan.
let orders = [];

// TODO: selesaikan fungsi addOrder
// Fungsi untuk tambah pesanan baru ke daftar orders.
function addOrder(customerName, items) {
  // Hitung total harga seluruh item yang dipesan.
  const totalPrice = items.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // Buat objek baru untuk simpan info pesanan.
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    // default (awal) status pesanan
    status: 'Menunggu',
  };

  // Tambah pesanan baru ke array orders.
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
// Fungsi untuk update status pesanan sesuai id.
function updateOrderStatus(orderId, status) {
  // Mencari, lalu mengembalikan pesanan ber-id identik dengan orderId.
  const selectedOrder = orders.find((order) => {
    return order.id === orderId;
  });

  // Memperbarui status jika pesanan sukses ditemukan.
  if (selectedOrder) {
    selectedOrder.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
// Fungsi untuk hitung total pendapatan dari pesanan berstatus 'Selesai'.
function calculateTotalRevenue() {
  // Memilih pesanan berstatus 'Selesai', lalu total harganya dijumlahkan.
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((revenue, order) => {
      return revenue + order.totalPrice;
    }, 0);
}

// TODO: selesaikan fungsi deleteOrder
// Fungsi untuk hapus pesanan sesuai id.
function deleteOrder(id) {
  orders = orders.filter((order) => {
    // Buat daftar baru tanpa pesanan dengan id yang dipilih.
    return order.id !== id;
  });
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
