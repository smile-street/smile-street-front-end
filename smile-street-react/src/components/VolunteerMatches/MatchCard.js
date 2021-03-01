import React from "react";
import {
  Button,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));

export default function MatchCard() {
  const classes = useStyles();
  const [openYesCard, setOpenYesCard] = React.useState(false);
  const [openNoCard, setOpenNoCard] = React.useState(false);

  const handleClickYes = () => {
    setOpenYesCard(true);
  };

  const handleCloseYes = () => {
    setOpenYesCard(false);
  };

  const handleClickNo = () => {
    setOpenNoCard(true);
  };

  const handleCloseNo = () => {
    setOpenNoCard(false);
  };

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>

            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem>
                <ListItemText primary="Good Cause" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Description of opportunity" />
              </ListItem>
              <Divider />
              <ListItem href="#simple-list">
                <ListItemText primary="Dates" />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.buttonColor}
            onClick={handleClickYes}
          >
            Yes Please
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.buttonColor}
            onClick={handleClickNo}
          >
            No Thankyou
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={openYesCard}
        onClose={handleClickYes}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thank you for accepting. Good Cause will reach out soon."}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleCloseYes} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openNoCard}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"No worries.We will try for another match"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleCloseNo} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
