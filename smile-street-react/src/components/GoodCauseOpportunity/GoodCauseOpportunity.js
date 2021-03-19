import React, {useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Container,
  Snackbar,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  makeStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import AutoCompleteTag from './AutoCompleteTag';
import PageHeading from '../PageHeading/PageHeading';
import DatePicker from './DatePicker';
import locations from './locations.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#53bd98',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#449f80',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#449f80',
    },

    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#449f80',
    },
    margin: 8,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
    background: '#449f80',
    '&:hover': {
      background: '#449f80',
    },
  },
}));

export default function GoodCauseOpportunity() {
  const classes = useStyles();
  const [openToast, setOpenToast] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [opportunities, setOpportunities] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [skills, setSkills] = useState('');

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function addOpportunity() {
    const opportunity = {
      title: title,
      description: description,
      location: location,
      date: {
        start: startDate,
        end: endDate,
      },
      skills: skills,
    };
    const newOpportunities = opportunities.concat(opportunity);
    setOpportunities(newOpportunities);
    setTitle('');
    setDescription('');
  }
  const history = useHistory();
  function handleDone() {
    if (!opportunities.length) {
      setOpenToast(true);
    } else {
      history.push({pathname: '/GoodCauseMatches'});
      console.log(opportunities);
    }
  }

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Add Opportunity" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              id="title"
              label="Opportunity title"
              name="title"
              autoFocus
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={classes.root}
            />
            <TextField
              id="description"
              label="Brief description of the opportunity"
              multiline
              rows={6}
              variant="outlined"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className={classes.root}
            />
            <FormControl variant="outlined" fullWidth>  
                <InputLabel id="location-label">Select your location</InputLabel>
                <Select
                  labelId="location-label"
                  label="Select your location"
                  id="location"
                  name='location'
                  style={{margin: 8}}
                  className={classes.root}
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                >
                  {locations.map(city => {
                    return(
                      <MenuItem value={city.name}>{city.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            <Grid item xs={12} sm={12} fullWidth>
              <AutoCompleteTag setSkills={setSkills} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker id={'Start Date'} setDate={setStartDate} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker id={'End Date'} setDate={setEndDate} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                onClick={addOpportunity}
              >
                Save Opportunity
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                className={classes.buttonColor}
                onClick={handleDone}
              >
                I want see my matches!
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleToastClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleToastClose} severity="warning">
          You must save at least one Opportunity to see matches!
        </Alert>
      </Snackbar>
    </Container>
  );
}
