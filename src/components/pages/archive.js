import React, { useState, useEffect } from "react";
import host from "../../host";
import { Grid, GridColumn, GridRow, Divider } from "semantic-ui-react";

/**
 * TODO: Delete & Restore function
 */

const Archive = () => {
  const [data, setData] = useState([{ _id: "", word: "", description: "" }]);

  useEffect(() => {
    fetch(`${host}/api/words/archive`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          setData(json);
        }
      });
  }, []);

  return (
    <Grid>
      <GridRow centered columns="2">
        <h2>Archive</h2>
        <GridColumn>
          {data.map((item) => (
            <div key={item._id}>
              <h4>{item.word}</h4>
              <div>{item.description}</div>
              <Divider />
            </div>
          ))}
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default Archive;
