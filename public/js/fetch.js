const fetch = (value, method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4)
      if (xhr.status !== 200) callback(null, xhr.status);
      else {
        if (JSON.parse(xhr.responseText))
          callback(JSON.parse(xhr.responseText));
        else callback(null, xhr.status);
      }
  };
  xhr.open(method, url);
  xhr.send(value);
};
