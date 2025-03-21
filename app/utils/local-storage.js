"use client";

import { v4 as uuidv4 } from "uuid";

export const add = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ data: value }));
};

export const get = (key) => {
  const payload = localStorage.getItem(key);
  const data = JSON.parse(payload);

  return data?.data || [];
};

export const set = (key, value, uuid) => {
  const payload = get(key);
  let data;

  if (uuid.length < 10) {
    value.uuid = uuidv4();
    data = payload;
    data.push(value);
  } else {
    data = payload.map((exer) => {
      if (exer.uuid === uuid) {
        value.uuid = uuid;
        return value;
      }
      return exer;
    });
  }

  localStorage.setItem(key, JSON.stringify({ data: data }));
};

export const del = (key) => {
  localStorage.removeItem(key);
};
