function getDateNow() {
  let date = new Date();
  const nowDate =
    date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate() + 1)).slice(-2);
  return nowDate;
}
