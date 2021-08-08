import React from "react";

export default function Result(exchange) {
  let i = 1;
  return exchange.map((p) => {
    
      return (
        <tr key={p}>
          <th>{i++}</th>
          <th>{p[0]}</th>
          <th>{p[1]}</th>
        </tr>
      );
    
  });
}
