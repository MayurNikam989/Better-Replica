"use client";
import { useMemo, useState, useEffect } from "react";
import styles from "@styles/calculator.module.scss";

function monthlyPI(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

export default function Calculator({
  initialTaxes = 265,
  initialZip = "421005",
}) {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [taxes, setTaxes] = useState(initialTaxes);
  const [insurance, setInsurance] = useState(100);
  const [hoa, setHoa] = useState(0);
  const [zip, setZip] = useState(initialZip);

  const loanAmount = useMemo(() => {
    const down = homePrice * (downPct / 100);
    return Math.max(homePrice - down, 0);
  }, [homePrice, downPct]);

  const pi = useMemo(
    () => monthlyPI(loanAmount, rate, years),
    [loanAmount, rate, years]
  );

  const total = useMemo(
    () => pi + Number(taxes) + Number(insurance) + Number(hoa),
    [pi, taxes, insurance, hoa]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className="card">
          <h2>Mortgage Calculator</h2>
          <div className="row">
            <div className="col-6">
              <label className="label">Home price</label>
              <input
                className="input"
                type="number"
                min="0"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">Down payment (%)</label>
              <input
                className="input"
                type="number"
                min="0"
                max="100"
                value={downPct}
                onChange={(e) => setDownPct(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">Interest rate (% APR)</label>
              <input
                className="input"
                type="number"
                step="0.01"
                min="0"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">Loan term (years)</label>
              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              >
                <option value={30}>30</option>
                <option value={20}>20</option>
                <option value={15}>15</option>
                <option value={10}>10</option>
              </select>
            </div>
            <div className="col-6">
              <label className="label">Property taxes (monthly)</label>
              <input
                className="input"
                type="number"
                min="0"
                value={taxes}
                onChange={(e) => setTaxes(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">Home insurance (monthly)</label>
              <input
                className="input"
                type="number"
                min="0"
                value={insurance}
                onChange={(e) => setInsurance(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">HOA dues (monthly)</label>
              <input
                className="input"
                type="number"
                min="0"
                value={hoa}
                onChange={(e) => setHoa(Number(e.target.value))}
              />
            </div>
            <div className="col-6">
              <label className="label">ZIP code</label>
              <input
                className="input"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Estimated monthly payment</h3>
          <div className={styles.total}>
            ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className={styles.breakdown}>
            <div>
              <span>Principal & interest</span>
              <strong>
                ${pi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </strong>
            </div>
            <div>
              <span>Property taxes</span>
              <strong>${Number(taxes).toLocaleString()}</strong>
            </div>
            <div>
              <span>Home insurance</span>
              <strong>${Number(insurance).toLocaleString()}</strong>
            </div>
            <div>
              <span>HOA</span>
              <strong>${Number(hoa).toLocaleString()}</strong>
            </div>
          </div>
          <p className={styles.disclaimer}>
            Estimates only. Not a commitment to lend.
          </p>
          <a
            href="/start"
            className="btnPrimary"
            style={{ width: "100%", textAlign: "center" }}
          >
            Start pre-approval
          </a>
        </div>
      </div>
    </div>
  );
}
