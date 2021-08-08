import React from 'react';

function api() {
  return fetch("http://localhost:8080/api").then(data => data.json).then((data) => console.log(data))

}

    