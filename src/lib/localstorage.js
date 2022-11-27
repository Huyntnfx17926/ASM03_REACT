// Lưu dữ liệu
export const saveToStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

// Lấy dữ liệu
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Xóa dữ liệu
export const deleteFromStorage = (key) => {
  localStorage.removeItem(key);
};
