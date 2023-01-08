import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  header: { textAlign: "center" },
  boxStyle: {
    flexGrow: 1, padding: "10px",
    [theme.breakpoints.down('md')]: {
      flexGrow: 1, padding: "10px"
    },
  },
  cardPage: {
    display: "flex", [theme.breakpoints.down('md')]: {
      display: "flex",
      flexDirection: "column"
    },
  },
  savebuttonStyle: {
    textAlign: "right", paddingRight: "10px",
    paddingBottom: "27px",
    paddingTop: "10px",
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      textAlign: "center"
    },
  },
  saveButton: {
    background: "#009B86 !important",
    color: "#ffffff !important",
    width: "200px",
    height: "60px",
    fontFamily: "robot", "&:hover": {
      backgroundColor: "#34AC9C !important"
    }
  },
  topCardClass: {
    maxWidth: 250, maxHeight: 254, background: "#009B86 !important", margin: "10px", minWidth:"18%",minHeight:"18%", "&:hover": {
      backgroundColor: "#34AC9C !important"
    }
  },
  titleStyle: { color: "#FFFFFF", fontFamily: "robot", textAlign: "center", paddingTop: "6px" },
  cardMediaStyle: { height: 75, borderRadius: "83px", width: "77px", background: "#FFFFFF", marginLeft: "77px", textAlign: "center" },
  typographyStyle: { color: "#FFFFFF", fontFamily: "robot", textAlign: "center" },
  buttonDivStyle: { textAlign: "center", paddingBottom: "10px" },
  buttonStyle: { color: "#FFFFFF !important", background: "#959494 !important", fontFamily: "robot", "&:hover": { backgroundColor: "#959494 !important" } },
  selectedColor: { maxWidth: 250, maxHeight: 254, background: "#34AC9C !important", margin: "10px", minWidth:"18%",minHeight:"18%", }

}));

export default styles;
