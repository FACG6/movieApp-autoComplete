const fetch = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4)
      if (xhr.status !== 200) alert("Error!!!!");
      else {
        if (JSON.parse(xhr.responseText))
          callback(JSON.parse(xhr.responseText));
        else alert("Error!!!!");
      }
  };
  xhr.open(method, url);
  xhr.send();
};
