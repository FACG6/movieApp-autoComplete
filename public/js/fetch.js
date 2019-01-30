const fetch = (value, method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
      if (xhr.status !== 200) {
        const error = xhr.status;
        callback(error, null);
      } else {
        if (JSON.parse(xhr.responseText))
          callback(null, JSON.parse(xhr.responseText));
        else callback(`Error, Data not convertable`, null);
      }
      callback(null, JSON.parse(xhr.responseText));

    }
  };
  xhr.open(method, url);
  xhr.send(value);
};
