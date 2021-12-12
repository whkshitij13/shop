import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    
    media: {
    height: 200,
    
    backgroundSize:"cover",
    backgroundColor: "#000000",
    backgroundRepeat: "no-repeat",
   
  },
  cardContent: {
    justifyContent: 'space-between',
   
    
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
