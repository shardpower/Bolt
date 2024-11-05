var proxySelect = document.getElementById("proxy-select");
var ab = document.getElementById("ab");

if (proxySelect) {
    proxySelect.value = localStorage.getItem("proxy") || "uv";
    proxySelect.addEventListener("change", function () {
        localStorage.setItem("proxy", proxySelect.value);
    });
}

if (ab) {
    ab.addEventListener("click", function () {
        var abtab = window.open("about:blank", "blank");
        abtab.document.write(`
  <html>
    <head>
      
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="/index.html" frameborder="0"></iframe>
    </body>
  </html>
`);
        window.location.href = "https://classroom.google.com/u/";
    });
}