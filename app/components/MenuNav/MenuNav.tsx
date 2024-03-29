'use client';

import * as React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { IconButton, Typography } from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useTheme } from '@/app/theme/ThemeContext';

/* import LocationCityIcon from '@mui/icons-material/LocationCity'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import ArticleIcon from '@mui/icons-material/Article'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts' */

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 230 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon /> : <ApartmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon /> : <ApartmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button sx={{ marginLeft: 0 }} onClick={toggleDrawer(true)}>
        <MenuOpenIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Adiciona flex direction column
            height: '100%', // Garante que o Drawer ocupe toda a altura
          }}
        >
          <Box
            height={150}
            width={230}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            p={2}
            /* sx={{ border: '2px solid grey' }} */
          >
            <Image
              src="/logoPveMenu.png"
              alt="Foto do usuário"
              width={120}
              height={120}
            />
          </Box>
          {DrawerList}
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <Box
            height={150}
            width={230}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            sx={{ border: '2px solid grey', marginTop: 'auto' }}
          >
            {' '}
            <Image
              src="/profile-placeholder.png"
              alt="Foto do usuário"
              width={80}
              height={80}
            />
            <Typography
              variant="subtitle2"
              component="h1"
              sx={{ mb: 2, textAlign: 'center' }}
            >
              Nome do Usuário
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
