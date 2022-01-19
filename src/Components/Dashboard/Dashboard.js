import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./../Result";
import "./../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import Fill from "../Fill";
import "./Dashboard.css";

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
    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");
    list1.value = exc2;
    list2.value = exc1;
  };

  return (
    <div>
      
        <div className="menu">
          <div className="header">
          <h2 className="mainHead"> Exchange Rates </h2>

          <button className="btn">Go back to main</button>
</div>
          <div>
            <div className="filterBar">
              <div className="filterBar__item">
                <p>from</p>
                <select
                  id="list1"
                  onChange={(e) => {
                    setExc1(e.target.value);
                  }}
                >
                  {Fill(excRate)}
                </select>
                <p>to</p>
                <select
                  id="list2"
                  onChange={(e) => {
                    setExc2(e.target.value);
                  }}
                >
                  {Fill(excRate)}
                </select>
              </div>

              <button className="switchButton">switch currency</button>
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
  );
}
