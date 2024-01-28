
setInterval(fn = () => {

const addZero = (i) => {
if (i < 10) {i = "0" + i}
return i;
}
  let date = new Date();
  let hour = addZero(date.getHours());
  let mins = addZero(date.getMinutes());
  let secs = addZero(date.getSeconds());
  console.log(`\n${hour}:${mins}:${secs}`);
},1000);
