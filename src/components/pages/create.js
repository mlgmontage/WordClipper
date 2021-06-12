import React from "react";
import host from "../../host";
import formInput from "../hooks/formInput";
import {
  Grid,
  GridColumn,
  GridRow,
  Form,
  FormField,
  Button,
  Icon,
} from "semantic-ui-react";

/**
 * TODO: Loading screen when new word gets submitted
 */

const Create = () => {
  const word = formInput("");
  const description = formInput("");

  const submit = () => {
    if (word !== "" || description !== "") {
      fetch(`${host}/api/words/create`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: word.value,
          description: description.value,
          isCompleted: false,
        }),
      }).then((res) => {
        description.setValue("");
        word.setValue("");
      });
    }
  };

  return (
    <Grid>
      <GridRow centered columns="2">
        <GridColumn>
          <Form onSubmit={submit}>
            <FormField>
              <label>Word</label>
              <input required {...word.bind} value={word.value} id="word" />
            </FormField>

            <FormField>
              <label>Description</label>
              <input required {...description.bind} value={description.value} />
            </FormField>

            <Button type="submit">
              <Icon name="paperclip" /> +Add
            </Button>
          </Form>
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default Create;
