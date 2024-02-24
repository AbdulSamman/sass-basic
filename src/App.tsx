//import "./styles/loesung1.scss";
import "./styles/loesung2.scss";
import { useState } from "react";
import { ButtonDis } from "./components/ButtonsDis";

function App() {
  const [showToggle, setShowToggle] = useState(false);
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
        <p>{showToggle ? "Currently disabled" : "Currently enabled"}</p>
        <button
          className="showToggle"
          onClick={() => setShowToggle(!showToggle)}>
          {!showToggle ? <>Toggle Disabled</> : <>Toggle Enable</>}
        </button>
        <hr />
        {!showToggle && (
          <>
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
            <hr />
          </>
        )}

        <ButtonDis />
        <hr />
        <h1 className="special">The H1</h1>
        <h2 className="special">The H2</h2>
        <h3 className="special">The H3</h3>
        <h4 className="special">The H4</h4>
        <h5 className="special">The H5</h5>
        <h6 className="special">The H6</h6>
      </section>
    </div>
  );
}

export default App;
