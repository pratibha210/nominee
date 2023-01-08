

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useStyles from "./Ballot.style"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BasicModal from '../Modal/Modal';
import api from "../../Api/Api"

const Ballot = () => {
  const classes = useStyles();
  const [selectedData, setSelectedData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [categoryArr, setCategoryArr] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); setSelectedData({}); };

  /*
  API call to get category list
  */

  useEffect(() => {
    api.getBallotData().then(res => {
      res?.items?.map((x)=>{
        return(
          x.items?.map((y)=>{
            return(
              y.select = false

            )
          })
        )
      });
      setCategoryArr(res?.items);
    }).catch(err => {
      // console.log(err,"err");
    });
  }, []);


  /* 
on select function for nominee cart
*/
  const onSelect = (e, value) => {
    // console.log(e,"e",value,"value");
    setSelectedData(e);
    categoryArr?.map((x)=>{
      return(
        x.items?.map((y)=>{
          return(
            y.select = e.id === y.id ? true: false

          )
        })
      )
    });
    setCategoryArr(categoryArr);
  }

  return (
    <div className='ballot' >
      <div className={classes.header}>
        <h2> AWARDS 2021 </h2>

      </div>
      {categoryArr?.map((catego) => {
        return (

          <>
            {open == true &&
              <BasicModal open={open} handleClose={handleClose} selectedData={selectedData} />

            }
            <Box className={classes.boxStyle}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {catego.title}
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>

            <div className={classes.cardPage} >
              {catego?.items?.map((cart) => {
                return (
                  <Card className={[cart.select == true ? classes.selectedColor : classes.topCardClass]}>
                    <Typography variant="h5" component="div" className={classes.titleStyle}>
                      {cart?.title}
                    </Typography>
                    <CardMedia
                      className={classes.cardMediaStyle}
                      image={cart.photoUrL}
                      title="green iguana"
                    />
                    <CardContent>

                      <Typography variant="body2" color="text.secondary" className={classes.typographyStyle}>
                       {/* sadasdasdsadasdasdsadsadasdasda */}
                      </Typography>
                    </CardContent>
                    <div className={classes.buttonDivStyle}>
                      <Button size="small" className={classes.buttonStyle} onClick={() => onSelect(cart, catego)}>Select nominee</Button>
                    </div>
                  </Card>
                )
              })}

            </div>

          </>

        )
      })}
      <div className={classes.savebuttonStyle}>
        <Button disabled={!selectedData.title ? true : false}  className={classes.saveButton} onClick={() => handleOpen()}>
          Submit Ballot
        </Button>
      </div>
    </div >
  )
}

export default Ballot;