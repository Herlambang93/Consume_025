function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  localStorage.setItem("nama", profile.getName());
  localStorage.setItem("image", profile.getImageUrl());
  localStorage.setItem("email", profile.getEmail());
  window.location.href = "/data.html";
}

function onLoad() {
  gapi.load("auth2", function () {
    gapi.auth2.init();
  });
}

$("#user").ready(function () {
  var user = document.getElementById("user");
  user.innerHTML = `Selamat Datang, ${localStorage.getItem("nama")}`;
});

$("#tbl").ready(function () {
  var tbl = document.getElementById("tbl");
  getAll().then((response) => {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      const tr = tbl.insertRow();
      const td1 = tr.insertCell();
      const td2 = tr.insertCell();
      const td3 = tr.insertCell();
      const td4 = tr.insertCell();
      const td5 = tr.insertCell();
      const td6 = tr.insertCell();
      const td7 = tr.insertCell();
      console.log(response[i]);

      td1.innerHTML = response[i].idbarang;
      td2.innerHTML = response[i].jenis_barang;
      td3.innerHTML = response[i].harga_barang;
      td7.innerHTML = `<div class ="justify content-center">
					<a class="btn tombol ms-2" href="edit.html?idbarang=${response[i].idbarang}">Edit </a>
					<button type ="button" class="btn tombol ms-2" onclick="del(${response[i].idbarang});">Delete</button>
					</div>`;
    }
  });
});
