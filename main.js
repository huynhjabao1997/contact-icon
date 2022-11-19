window.onload = function prepareFrame() {
    let ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "http://127.0.0.1:5500/index.html"); // Update this
    ifrm.style = "border: none; position: fixed; right: 30px; bottom: 30px; z-index:999; width: 100%; height: 100%;";
    document.body.append(ifrm);
}