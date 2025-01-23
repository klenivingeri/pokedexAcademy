
export const add = (key, value) => {
  localStorage.setItem(key, JSON.stringify({data: value}));
}

export const get = (key) => {
  const payload  = localStorage.getItem(key);
  const data = JSON.parse(payload)
  return data.data
}

export const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify({data: value}));
}

export const del = (key) => {
  localStorage.removeItem(key);
}