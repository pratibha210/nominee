import { makeStyles } from "@material-ui/core/styles";
import { WidthFull } from "@mui/icons-material";

const styles = makeStyles((theme) => ({
    App: {
        textAlign: "center"
    },

    Applogo: {
        height: "15vmin",
        pointerEvents: "none"
    },

    Appheader: {
        backgroundColor: "#0D2436 !important",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
        overflowX:"hidden",
        [theme.breakpoints.down('md')]: {
            backgroundColor: "#0D2436 !important",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(10px + 2vmin)",
            color: "white",
            width: "100%"
        },
    },

    Applink: {
        color: "#61dafb"
    }

}));

export default styles;
