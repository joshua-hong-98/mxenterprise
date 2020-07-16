function includeHTML(id) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("div");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    if (elmnt.id == id) {
      var ind = id.indexOf("modal");
      file = "products/" + id.slice(0,ind) + ".html";
      console.log(file);
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          console.log(elmnt);
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
