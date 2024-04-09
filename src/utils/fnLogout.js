export default function fnLogout() {
  sessionStorage.clear();
  window.location.reload();
}
