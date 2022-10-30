import * as React from "react";
import './Accordion.css';

function Accordion(props) {
  return (
      <div className="accordion">
          <ul>
              {props.children}
          </ul>
      </div>
  );
}

export default Accordion;
