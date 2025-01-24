import { v4 as uuidv4 } from 'uuid';

export const add = (key, value) => {
  localStorage.setItem(key, JSON.stringify({data: value}));
}

export const get = (key) => {
  const payload  = localStorage.getItem(key);
  const data = JSON.parse(payload)
  return data?.data || []
}

export const set = (key, value) => {
  value.uuid = uuidv4()

  const payload = get(key)
  payload.push(value)

  localStorage.setItem(key, JSON.stringify({data: payload}));
}

export const del = (key) => {
  localStorage.removeItem(key);
}