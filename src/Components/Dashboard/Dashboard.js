import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./../Result";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import Fill from "../Fill";

export default function Dashboard() {
  debugger;
  const [excRate, setExcRate] = useState([]);
  const [exc1, setExc1] = useState("AED");
  const [exc2, setExc2] = useState("AED");

  let number = 0;

  useEffect(() => {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=29a0c4055331c1298d783f23037ff432"
      )
      .then((res) => {
        setExcRate(res.data.rates);
      });
  }, []);
  const calc = (d) => {
    if (d[`${exc1}`] > d[`${exc2}`]) {
      number = d[`${exc2}`] / d[`${exc2}`] / (d[`${exc1}`] / d[`${exc2}`]);
    } else {
      number =
        (excRate[`${exc1}`] / excRate[`${exc1}`]) *
        (excRate[`${exc2}`] / excRate[`${exc1}`]);
    }

    return number.toFixed(3);
  };
  const BtnSwitch = () => {
    setExc1(exc2);
    setExc2(exc1);
    let list1 = document.getElementById('list1')
    let list2 = document.getElementById('list2')
    list1.value = exc2
    list2.value = exc1
    
  };

  return (
    <div>
      <div>
        <h2 className="mainHead"> Exchange Rates </h2>
        <div>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" href="/">
              Go back to main
            </Button>
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>Here Filter by All Currency</h2>

            <div className="filterBar">
              <div className="filterBar__item">
                From
                <select
                  id="list1"
                  onChange={(e) => {
                    setExc1(e.target.value);
                  }}
                >
                  {Fill(excRate)}
                </select>
                To
                <select
                id="list2"
                  onChange={(e) => {
                    setExc2(e.target.value);
                  }}
                >
                  {Fill(excRate)}
                </select>
              </div>

              <Button variant="secondary" onClick={BtnSwitch} size="sm">
                switch currency
              </Button>
              <div>
                <span className="filterBar__price">{calc(excRate)}</span>
              </div>
            </div>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Currency</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{Result(excRate)}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
