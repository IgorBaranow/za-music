export function setStorageValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value)); // Use JSON to parse it to string format. And now in the function I can save IDs, objects, numbers, strings, ... whatever I want.
}

// getting value from the storage by the keys
export function getStorageValue(key) {
  const value = window.localStorage.getItem(key);

  const parsedValue = JSON.parse(value);
  return parsedValue;
}
