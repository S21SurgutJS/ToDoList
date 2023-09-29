import { todoKey } from "./constants.js";

const items = []
let id = 0

function init() {
  if (localStorage.length) {
    clear()
    items.push(...JSON.parse(localStorage.getItem(todoKey)));
  }
  if (items.length) {
    id = Math.max(items.map(i => i.id))
  }
  console.log(items);
}


function getItems() {
  return items
}

function getNextId() {
  return id++
}

function getCurrentId() {
  return id
}

/**
 * @param {Object} item 
 * @param {string} item.id
 * @param {string} item.text 
 * @param {string} item.isDone 
 */
function addItem(item) {
  items.push(item)
  localStorage.setItem(todoKey, JSON.stringify(items));
}

function clear() {
  items.splice(0, items.length)
}

function removeItem(id) {
  const idx = items.findIndex(i => i.id === id)
  console.log('idx | ', idx);
  items.splice(idx, 1)
  localStorage.setItem(todoKey, JSON.stringify(items));
}

/**
 * @param {number} id 
 * @param {string} item.text 
 * @param {boolean} item.isDone 
 */
function updateItem(id, item) {
  const searchItem = items.find(i => i.id === id)
  if (searchItem) {
    Object.assign(searchItem, item)
    localStorage.setItem(todoKey, JSON.stringify(items));
  }
}

export const storage = Object.freeze({ getItems, addItem, updateItem, getNextId, getCurrentId, init, removeItem })