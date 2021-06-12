import React, { useState, useEffect } from "react";
import host from "../../host";
import { Grid, GridColumn, GridRow, Divider } from "semantic-ui-react";

/**
 * TODO: Delete function
 */

const Explore = () => {
  const [data, setData] = useState([{ _id: "", word: "", description: "" }]);

  useEffect(() => {
    fetch(`${host}/api/words`)
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
        <GridColumn>
          <h2>Explore</h2>
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

export default Explore;
