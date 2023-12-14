const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
const idLen = 6;

function useHistory() {
  var hash = window.location.pathname.slice(1);
  if (hash !== "" && !hash.includes("/")) {
    return hash;
  }
  let id = "";
  for (let i = 0; i < idLen; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  window.location.pathname = id;
  return id;
}

export default useHistory;
