function setItem(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key: string) {
  const item = window.localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
}

function deleteItem(key: string) {
  window.localStorage.removeItem(key);
}

function setSessionItem(key: string, value: any) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

function getSessionItem(key: string) {
  const item = window.sessionStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
}

function deleteSessionItem(key: string) {
  window.sessionStorage.removeItem(key);
}

function combineClassNames(...classNames: string[]) {
  return classNames.filter((className) => className !== "").join(" ");
}

export {
  setItem,
  getItem,
  deleteItem,
  setSessionItem,
  getSessionItem,
  deleteSessionItem,
  combineClassNames,
};
