import React, { useState } from "react";
import "./Payments.css";

import {useNavigate } from "react-router-dom";

function PaymentGateway() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const isFormValid =
    cardNumber !== "" && month !== "" && year !== "" && cvv !== "";

  const handleProceed = (e) => {
    e.preventDefault();

    if (isFormValid) {
      
      navigate("/success");
    } else {
      alert("Please fill in all the details before proceeding.");
    }
  };

  return (
    <div className="detail-filler">
      <form className="credit-card">
        <div className="form-header">
          <h4 className="title">Credit card detail</h4>
        </div>

        <div className="form-body">
          
          <input
            type="text"
            className="card-number"
            placeholder="Card Number"
            required
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

        
          <div className="date-field">
            <div className="month">
              <select
                name="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {" "}
                <option>Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
                
              </select>
            </div>
            <div className="year">
              <select
                name="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option>Year</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>

              
              </select>
            </div>
          </div>

          
          <div className="card-verification">
            <div className="cvv-input">
              <input
                type="text"
                placeholder="CVV"
                required
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="cvv-details">
              <p>3 or 4 digits usually found on the signature strip</p>
            </div>
          </div>

         
          <button
            type="submit"
            className="proceed-btn"
            onClick={handleProceed}
            disabled={!isFormValid}
          >
            <p>Proceed</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentGateway;
