import React, { useState } from "react";
import "./style.css";
const PageContent = () => {
  const [popUp, setPopUp] = useState(false);
  const [box, setBox] = useState([]);
  const [gridValue, setGridValue] = useState(0);
  const gridRecordsHandler = (value) => {
    setGridValue(value);
    if (value > 0) {
      let factorial = value * value;
      let records = [];
      for (let i = 1; i <= factorial; i++) {
        records?.push(i);
      }
      let sort = records.sort(() => Math.random() - 0.5);
      setBox(sort);
    }
  };
  // global_variable
  let dragStart;
  const handleDrag = (event) => {
    event.preventDefault();
    dragStart = event.target.id;
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    let duplicate = [...box];
    //  to find value of draged box and droped box
    let draggedBoxDefaultValue = box[parseInt(dragStart)];
    let dropedBoxDefaltValue = box[parseInt(event.target.id)];
    // to switch data of drag and drop
    duplicate[parseInt(dragStart)] = dropedBoxDefaltValue;
    duplicate[parseInt(event.target.id)] = draggedBoxDefaultValue;
    const isSorted = duplicate.every((v, i, a) => !i || a[i - 1] <= v);
    if (isSorted === true) {
      setPopUp(true);
    } else {
    }
    setBox(duplicate);
  };
  return (
    <div className="container">
      {/* content_main_div */}
      <div className="content_main_div ">
        {/* pop_up_message_container */}
        <div
          className="pop_up_message_container"
          onClick={() => setPopUp(false)}
        >
          {/* pop_up_width */}
          <div className="pop_up_width">
            {/* pop_up_message_div  */}
            <div className="pop_up_message_div ">
              {popUp ? <h1>Welcome to the Team :)</h1> : ""}
            </div>
          </div>
        </div>
        {/* heading_div */}
        <div className="heading_div">
          <h1>Puzzel Game</h1>
        </div>
        {/* input_div */}
        <div className=" input_div">
          <input
            placeholder="Enter Number"
            onChange={(e) => {
              gridRecordsHandler(e.target.value);
            }}
            type="number"
          />
        </div>
        {/* grid_box_main_div */}
        <div className="grid_box_main_div">
          <div
            className="grid_container"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridValue}, auto)`,
            }}
          >
            {box?.map((single, index) => (
              <div
                className="grid_items"
                key={index}
                id={index}
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDrag={(e) => {
                  handleDrag(e);
                }}
                draggable="true"
              >
                {single}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageContent;
