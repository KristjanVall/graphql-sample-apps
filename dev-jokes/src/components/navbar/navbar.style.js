import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    padding: '0px 24px 0px 0px',
    color: 'white',
  },
  navLeft: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: 20,
    alignItems: 'center',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginLeft: '-15%',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  login: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  toggleBtn: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navLinks: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100%)',
    height: 'auto',
    backgroundColor: '#0B79D0',
    color: 'white',
    top: 64,
    padding: '16px 24px',
  },
  ml2: {
    marginLeft: theme.spacing(4),
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  searchToggle: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  headerTitle: {
    color: '#424242',
  },
  appBar: {
    background: 'white',
    color: '#424242',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100%)`,
    // marginLeft: 180,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100%)`,
      // marginLeft: 60,
      height: '58px',
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'center',
    cursor: 'pointer',
    minHeight: '80px !important',
    [theme.breakpoints.down('md')]: {
      marginLeft: '-15%',
    },
  },
}));

export default useStyles;
