const addZero = (i) => {
if (i < 10) {i = "0" + i}
return i;
}
  let date = new Date();
  let hour = addZero(date.getHours());
  let mins = addZero(date.getMinutes());
  console.log(`\n${hour}:${mins}`);
