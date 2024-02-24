//import "./styles/loesung1.scss";
import "./styles/loesung2.scss";
function App() {
  return (
    <div className="App">
      <div>
        <h1>Info Site</h1>
        <p>Welcome to thsi site.</p>
        <h2>Detailed Info</h2>
        <p>Welcome to thsi site.</p>
        <h3>More Info</h3>
        <p>Welcome to thsi site.</p>
      </div>
      <section className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          delectus
        </p>
        <hr />
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="warning">Warning</button>
        <button className="error">Error</button>
        <button className="info">info</button>
        <br />
        <button className="primary primary-disabled">Primary</button>
        <button className="secondary secondary-disabled">Secondary</button>
        <button className="warning warning-disabled">Warning</button>
        <button className="error error-disabled">Error</button>
        <button className="info info-disabled">Info</button>
      </section>
      <hr />
    </div>
  );
}

export default App;
