const d = document;

(() => {
  const xhr = new XMLHttpRequest();
  $xhr = d.getElementById("xhr");
  $fragment = d.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} - ${el.email} - ${el.username}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("error");
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
