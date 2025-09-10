// Store shortened URLs in localStorage

export function saveURL(code, url) {
  let urls = JSON.parse(localStorage.getItem("shortUrls")) || {};
  urls[code] = url;
  localStorage.setItem("shortUrls", JSON.stringify(urls));
}

export function getURL(code) {
  let urls = JSON.parse(localStorage.getItem("shortUrls")) || {};
  return urls[code];
}
