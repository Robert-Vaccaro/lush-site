import {useState} from 'react'
import {styled} from '@mui/material/styles';
import {Box, Drawer, AppBar, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Menu, ChevronLeft, Group, Woman} from '@mui/icons-material'
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

const transition = (theme, properties, duration) => ({
  transition: theme.transitions.create(properties.join(','), {
    easing: theme.transitions.easing.sharp,
    duration: duration,
  }),
})

const openedMixin = (theme) => ({
  width: drawerWidth,
  ...transition(theme, ['width'], theme.transitions.duration.enteringScreen),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  overflowX: 'hidden',
  ...transition(theme, ['width'], theme.transitions.duration.leavingScreen),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomAppBar = styled(AppBar, {shouldForwardProp: (prop) => prop !== 'open',})(
  ({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  ...(transition(theme, ['width', 'margin'], theme.transitions.duration.leavingScreen)),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    ...(transition(theme, ['width', 'margin'], theme.transitions.duration.enteringScreen)),
  }),
}));

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const createNewMenuButton = (Name, Icon, buttonClickFunction) => {
    return (
      <ListItem disablePadding sx={{display: 'block'}}>
        <ListItemButton onClick={buttonClickFunction} sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
          <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
            {Icon}
          </ListItemIcon>
          <ListItemText primary={Name} sx={{ opacity: open ? 1 : 0}}/>
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open} sx={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton aria-label="open drawer" onClick={() => setOpen(true)} edge="start" sx={{marginRight: 5, ...(open && {visibility: 'hidden'}), color: 'white' }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {createNewMenuButton('Users', <Group/>, () => router.push('/dashboard'))}
          {createNewMenuButton('Girls', <Woman/>, () => router.push('/girls'))}
        </List>
      </CustomDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}