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
          <Icon name="search" />
          <Link to="/explore">Explore</Link>
        </MenuItem>

        <MenuItem>
          <Icon name="football ball" />
          <Link to="/train">Train</Link>
        </MenuItem>

        <MenuItem>
          <Icon name="file" />
          <Link to="/archive">Archive</Link>
        </MenuItem>
      </Menu>
    </GridColumn>
  </Grid>
);

export default Navigation;
