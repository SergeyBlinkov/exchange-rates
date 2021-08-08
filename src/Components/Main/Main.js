import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function Main() {
  return (
    <div>
      <div className="wrapper">
        <h1 className="mainHead">Get info about Exchange rates</h1>
        <div className="d-grid gap-2">
        <Button 
        variant="primary"
        size="lg"
        href='/dashboard'
        >
            Click to get Echange Rates
          </Button>
        </div>
      </div>
    </div>
  );
}
