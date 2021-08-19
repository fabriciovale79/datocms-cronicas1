import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Container from './container'
import { left } from '@popperjs/core';
import { useState } from 'react';

export default function NavFooter({posts}) {
  const {left, right, home} = useState('BottomNavigation',{left:'/',right:'prefacio',home:'/'});

  return (
    <Container>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value="value"

        >
          <BottomNavigationAction label="Recents" icon={<ArrowBackIcon />}  />
          <BottomNavigationAction label="Favorites" icon={<MenuBookIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArrowForwardIcon />} />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}
