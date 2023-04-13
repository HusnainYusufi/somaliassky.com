import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function WidgetSortBy({ sortitems, title, setSort }) {
  const handleRadioGroupChange = (event) => {
    setSort(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <div className="sidebar-widget">
        <h3 className="widget-title">{title}</h3>
        <div className="title-shape"></div>
        <div className="check-box-list mt-4">
          {/* {sortitems.map((item) => {
            return ( */}
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="newest"
              name="radio-buttons-group"
              onChange={handleRadioGroupChange}
            >
              <FormControlLabel
                value="Newest"
                control={<Radio />}
                label="Newest"
              />
              <FormControlLabel
                value="Oldest"
                control={<Radio />}
                label="Oldest"
              />
            </RadioGroup>
          </FormControl>
          {/* );
          })} */}
        </div>
      </div>
    </>
  );
}

export default WidgetSortBy;
