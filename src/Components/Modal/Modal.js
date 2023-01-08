import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useStyles from "../Modal/Modal.style"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
export default function BasicModal(props) {
  const { selectedData, open } = props;
  const classes = useStyles();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };
  return (
    <div>
      <Modal
        hideBackdrop
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}


      >
        <Fade in={open}>
          <Box sx={style}>

            <div className={classes.closeIconStyle} onClick={props.handleClose}>
              <Tooltip title="Close">
                <IconButton className={classes.closeIconColorStyle}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
            <Typography id="transition-modal-title" variant="h6" component="h2" className={[selectedData?.title ? classes.headerStyle : classes.warningStyle]}>
              {selectedData?.title ? "Success" : "Warning !!"}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: "center", marginBottom: "20px" }}>
              {selectedData?.title ? "You have select " + selectedData?.title : "Please Select Nominee !!"}.
            </Typography>
            {/* <div className={classes.submitDiv}>

              <Button onClick={props.handleClose} className={classes.submitStyle}>
              {selectedData?.name ? "Submit" : "Close" }
                
              </Button>
            </div> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}