import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import host from "../../host";
import {
  Grid,
  GridColumn,
  GridRow,
  Button,
  Icon,
  Divider,
} from "semantic-ui-react";

const Train = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    {
      _id: "",
      word: "",
      description: "",
    },
  ]);

  useEffect(() => {
    fetch(`${host}/api/words`)
      .then((response) => response.json())
      .then((json) => {
        if (json[0] != undefined) {
          setData(json);
        }
      });
    document.addEventListener("keypress", keyhandler);

    return () => {
      document.removeEventListener("keypress", keyhandler);
    };
  }, []);

  const complete = (id) => {
    fetch(`${host}/api/words/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ isCompleted: true }),
    })
      .then((response) => response.json())
      .then(() => console.log("completed"));
  };

  const keyhandler = (event) => {
    if (event.key == "j") {
      previous();
    }
    if (event.key == "l") {
      next();
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <Grid>
      <GridRow centered columns="2">
        <GridColumn>
          <div>
            <h2>{data[index].word}</h2>
            <h3>{data[index].description}</h3>
          </div>

          <div>
            <Divider />
            <Button onClick={previous}>
              <Icon name="arrow left" /> Previous
            </Button>

            <Button onClick={() => complete(data[index]._id)}>
              <Icon name="check" /> Complete
            </Button>

            <Button>
              <Link to="/create">
                <Icon name="plus" /> Create
              </Link>
            </Button>

            <Button onClick={next}>
              <Icon name="arrow right" /> Next
            </Button>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default Train;
