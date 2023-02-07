import React, { useState } from "react";

export default function Textforms(props) {
  const huc = () => {
    console.log("uppercase was clicked" + text);

    let newtxt = text.toUpperCase();
    yo(newtxt);
  };
  const hlc = () => {
    console.log("uppercase was clicked" + text);

    let newtxt = text.toLowerCase();
    yo(newtxt);
  };
  const hcc = () => {
    console.log("clear" + text);

    let newtxt = "";
    yo(newtxt);
  };
  const [text, yo] = useState("enter text here");

  const honchange = (event) => {
    console.log("on change");
    yo(event.target.value);
  };

  return (
    <>
      <div className={`container bg-${props.mode} text-${props.mode==="light"?"dark":"light"  }`}>
        <h1>{props.h11}</h1>
        <div class="mb-3">
          <div class="mb-3 m-4">
            <label for="exampleFormControlTextarea1" class="form-label">
              {props.heading}
            </label>
            <textarea
              class="form-control"
              value={text}
              onChange={honchange}
              id="exampleFormControlTextarea4"
              rows="3"
            ></textarea>
          </div>
          <button class="btn btn-primary m-4" onClick={huc}>
            Convert to uppercase
          </button>
          <button class="btn btn-primary m-4" onClick={hlc}>
            Convert to lowercase
          </button>
          <button class="btn btn-primary m-4" onClick={hcc}>
            Clear Text
          </button>
        </div>
        <div className="containe m-2">
          <h1>Your text summary</h1>
          <p>
           words:{text.length}
           <br />
           characters:{text.split(" ").length-1}
           <br />
           Time to read this text is 
           <span> {text.length*0.08}</span> minutes

          </p>
          preview <br />
        {text}
        </div>
       
      </div>
    </>
  );
}
