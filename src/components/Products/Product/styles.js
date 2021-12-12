import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root: {
        maxWidth: '100%',

    },
    media:{
        height: '0',
        paddingTop:'56.25%',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        background: "linear-gradient(to bottom, #03001e, #7303c0, #ec38bc, #fdeff9)",
    },
    cardActions:{
        display:'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    },

}));