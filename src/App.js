import "./App.css";
import logo from "./assets/logo.svg";
import data from "./assets/data.json";
import BarChart from "./components/BarChart.jsx";

function App() {
  const totalAmountFromData = data.reduce((acc, cv) => acc + cv.amount, 0);

  const barStyles = {
    height: "76px",
    width: "40px",
    backgroundColor: "var(--clr-soft-red)",
    borderRadius: "5px",
  };

  function calculateBarStyles(height, id) {
    const getCurrentDate = new Date().getDay();
    const newHeight = ((height * 300) / totalAmountFromData) * 2.5;
    return +id === getCurrentDate
      ? {
          ...barStyles,
          height: `${newHeight}px`,
          backgroundColor: "var(--clr-cyan)",
        }
      : { ...barStyles, height: `${newHeight}px` };
  }
  return (
    <main>
      <section className="first-section">
        <p>
          My balance <br /> <span className="balance">$921.48</span>
        </p>
        <img src={logo} alt="logo-img" />
      </section>
      <section className="second-section">
        <h1>Spending - Last 7 days</h1>
        <div className="chart-container">
          {data.map((each) => (
            <BarChart
              key={each.id}
              data={each}
              calculateBarStyles={calculateBarStyles}
            />
          ))}
        </div>
        <footer>
          <p>
            Total this month
            <br /> <span className="total">$478.33</span>
          </p>
          <p>
            <span className="percentage">+2.4%</span> <br />
            from last month
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
