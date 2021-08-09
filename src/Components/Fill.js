import React from "react";

export default function Fill(exchange) {
  return Object.keys(
    exchange).map((p) => {
      return <option key={p}>{p}</option>;
    })
  ;
}
