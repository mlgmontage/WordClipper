import React from "react";
import { Menu, MenuItem, Icon, Grid, GridColumn } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Grid>
    <GridColumn>
      <Menu>
        <MenuItem>
          <Link to="/">
            <Icon name="paperclip" />
            WordClipper
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/explore">
            <Icon name="search" />
            Explore
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/train">
            <Icon name="football ball" />
            Train
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="/archive">
            <Icon name="file" /> Archive
          </Link>
        </MenuItem>
      </Menu>
    </GridColumn>
  </Grid>
);

export default Navigation;
