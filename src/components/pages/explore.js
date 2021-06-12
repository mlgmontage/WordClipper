import React, { useState, useEffect } from "react";
import host from "../../host";
import {
  Grid,
  GridColumn,
  GridRow,
  Card,
  CardGroup,
  CardContent,
  CardDescription,
  CardHeader,
} from "semantic-ui-react";

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
          <CardGroup>
            {data.map((item) => (
              <Card key={item._id}>
                <CardContent>
                  <CardHeader>{item.word}</CardHeader>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </CardGroup>
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default Explore;
