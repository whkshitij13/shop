import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    background: "linear-gradient(to bottom, #03001e, #7303c0, #ec38bc, #fdeff9)",
    padding: theme.spacing(4),

  },
  root: {
    flexGrow: 1,
  },
}));
