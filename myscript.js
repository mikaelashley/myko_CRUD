var iuV, fnV, mnV, snV, eaV, adV;

function readFom() {
  iuV = document.getElementById("Uid").value;
  fnV = document.getElementById("fname").value;
  mnV = document.getElementById("mname").value;
  snV = document.getElementById("sname").value;
  eaV = document.getElementById("Eadd").value;
  adV = document.getElementById("address").value;
  console.log(iuV, fnV, mnV, snV, eaV, adV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + iuV)
    .set({
      UniqueID: iuV,
      First_Name: fnV,
      Middle_Name: mnV,
      SurName: snV,
      Email_Address: eaV,
      Address: adV,
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + iuV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().UniqueID;
      document.getElementById("fname").value = snap.val().First_Name;
      document.getElementById("mname").value = snap.val().Middle_Name;
      document.getElementById("sname").value = snap.val().SurName;
      document.getElementById("Eadd").value = snap.val().Email_Address;
      document.getElementById("address").value = snap.val().Address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + iuV)
    .update({
      UniqueID: iuV,
      First_Name: fnV,
      Middle_Name: mnV,
      SurName: snV,
      Email_Address: eaV,
      Address: adV,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();
  
  firebase
    .database()
    .ref("student/" + iuV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
