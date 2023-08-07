// import React from 'react';
import React, { useState } from 'react';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Switch from '@mui/material/Switch';


// function that converst unnixtimestamp to date
function convertUnixTimestamp(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toISOString().slice(0, 10);
}

function convertDateToDate(date) {
  return date.toISOString().slice(0, 10);
}


// generate an array of dates for the last 31 days
const today = new Date();
const dates = [];

for (let i = 0; i < 31; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);
  dates.push(date);
}

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#41436a' : '#41436a',
  // borderColor: theme.palette.mode === 'dark' ? '#41436a' : '#984063',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const themeLight = createTheme({
  palette: {
    mode: "light",
    // background: {
    //   default: "#2a3850"
    // }
  } 
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   default: "#222222"
    // },
    // text: {
    //   primary: "#ffffff"
    // }
  }
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



function App() {

  const [items, setItems] = useState([]);
  const [light, setLight] = useState(true);

  function setTheme() {
    setLight(!light);
  }

  // This function fetches models from a database based on a given date
  // the result is stored in the items state
  // the result is array of objects:
  //{
  //   "capabilities": {
  //     "fine_tune": false,
  //     "inference": false,
  //     "completion": true,
  //     "chat_completion": false,
  //     "embeddings": false
  //   },
  //   "lifecycle_status": "preview",
  //   "deprecation": {
  //     "fine_tune": 1720137600,
  //     "inference": 1720137600
  //   },
  //   "id": "ada",
  //   "status": "succeeded",
  //   "created_at": 1646092800,
  //   "updated_at": 1688601600,
  //   "object": "model"
  // },
  async function fetchModels(date) {
    // Construct the endpoint URL with the given date
    const endpoint = "http://localhost:7071/api/getModelsFromDB?id=" + convertDateToDate(date);

    // Send a GET request to the endpoint URL
    const response = await fetch(endpoint, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            // Uncomment the following lines if you need to allow cross-origin requests
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // "Access-Control-Allow-Credentials": "true"
        }, 
        mode: 'cors',
        // body: JSON.stringify({ query: query })
    });

    // Handle bad or empty output
    if (!response.ok) {
        console.log("error");
        setItems([]);
    } else {
        // Everything is fine, parse the response as JSON and set the items state
        const result = await response.json();
        // console.log(result);
        // log number of items
        // console.log(result.length);
        console.log("found models:  " + result.length);
        setItems(result);
    }
  }
  
  

  return (
      <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>Azure OpenAI - model availability</Item>
            </Grid>
            <Grid xs={4}>
              <Item>France Central</Item>
            </Grid>
            <Grid xs={10}>
              <Item>Models count: {items.length}</Item>
              <Item>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Model</StyledTableCell>
                        <StyledTableCell align="right">Created</StyledTableCell>
                        <StyledTableCell align="right">Updated</StyledTableCell>
                        <StyledTableCell align="right">Lifecycle status</StyledTableCell>
                        <StyledTableCell align="right">Notes</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((row) => (
                        <StyledTableRow
                          //concate the id with the created_at to make it unique
                          key={row.id + row.created_at}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <StyledTableCell component="th" scope="row">
                            {row.id}
                          </StyledTableCell>
                          <StyledTableCell align="right">{convertUnixTimestamp(row.created_at)}</StyledTableCell>
                          <StyledTableCell align="right">{convertUnixTimestamp(row.updated_at)}</StyledTableCell>
                          <StyledTableCell align="right">{row.lifecycle_status}</StyledTableCell>
                          <StyledTableCell align="right">&nbsp;</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Item>
            </Grid>
            <Grid xs={2}>
            <MaterialUISwitch sx={{ m: 1 }} checked={!light} onChange={setTheme}  />
            <Item>Choose date:</Item>
              {
              dates.map(date => (
                <Item key={date.toISOString()}>
                  <Button variant="contained" onClick={() => fetchModels(date)}>{convertDateToDate(date)}</Button>
                </Item>
              ))
              }

            </Grid>
          </Grid>
        </Box>

      </ThemeProvider>

  );
}

export default App;

