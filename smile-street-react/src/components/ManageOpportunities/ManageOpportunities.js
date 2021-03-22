import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Container,
    Grid,
    Button,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    AccordionActions,
    Divider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageHeading from '../PageHeading/PageHeading';
import useStyle from '../Style/Style';

export default function ManageOpportunities() {
    const classes = useStyle();
    const history = useHistory();
    const opportunities = [{id: "123455",  
                            title: "Opportunity 1",
                            description: "Lorem ipsum dolorm sin amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
                            {id: "234567",
                            title: "Opportunity 2", 
                            description: "Lorem ipsum dolorm sin amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
                            {id: "2345678",
                            title: "Opportunity 3",
                            description: "Lorem ipsum dolorm sin amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
                        ];


    return (
        <Container component="main">
            <Paper className={classes.paper}>
                <Container maxWidth="xs">
                    <PageHeading heading="Edit Opportunities" />
                    {/* // */}
                    <div className={classes.root}>
                        {opportunities.map(opportunity => (
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>{opportunity.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    {opportunity.description}
                                </Typography>
                                </AccordionDetails>
                                <Divider />
                                <AccordionActions>
                                    <Button size="small" className={classes.button}>Edit</Button>
                                    <Button size="small" className={classes.button}>Delete</Button>
                                </AccordionActions>
                            </Accordion>
                        ))}
                    </div>
                    {/* // */}
                    <Grid item xs={12} sm={12}>
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={()=> history.push({pathname: '/GoodCauseMatches'})}
                        >
                            Back to Matches
                        </Button>
                    </Grid>
                </Container>
            </ Paper>
        </ Container>
    )}