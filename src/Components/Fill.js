import React from "react";

export default function Fill(exchange) {
  
  return exchange.map((p) => {
    
return <option key={p}>{p[0]}</option>
    
  }
  )
}
