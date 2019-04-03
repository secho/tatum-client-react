import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BarChartIcon from '@material-ui/icons/BarChart'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LayersIcon from '@material-ui/icons/Layers'
import PeopleIcon from '@material-ui/icons/People'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { StyledLink } from '../CommonStyled'

const Navigation = () => (
  <div>
    <StyledLink to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/another">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Another" />
      </ListItem>
    </StyledLink>
    {/* <StyledLink to="/transactions">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/payments">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Make a payment" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/authorizations">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Authorizations" />
      </ListItem>
    </StyledLink> */}
  </div>
)

export default Navigation
