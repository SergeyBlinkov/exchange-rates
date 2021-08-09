import React from "react";

export default function Result(exchange) {
  let i = 1;
  return Object.entries(exchange).map((p) => {
    
      return (
        <tr key={p}>
          <th>{i++}</th>
          <th>{p[0]}</th>
          <th>{(parseInt(p[1] * 1000)/ 1000)}</th>
        </tr>
      );
    
  });
}
