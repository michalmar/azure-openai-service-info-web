import React from 'react';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function that converst unnixtimestamp to date
function convertUnixTimestamp(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toISOString().slice(0, 10);
}


const rows = [
  {
      "capabilities": {
          "fine_tune": false,
          "inference": false,
          "completion": true,
          "chat_completion": false,
          "embeddings": false
      },
      "lifecycle_status": "preview",
      "deprecation": {
          "fine_tune": 1720137600,
          "inference": 1720137600
      },
      "id": "ada",
      "status": "succeeded",
      "created_at": 1646092800,
      "updated_at": 1688601600,
      "object": "model"
  },
  {
      "capabilities": {
          "fine_tune": false,
          "inference": false,
          "completion": true,
          "chat_completion": false,
          "embeddings": false
      },
      "lifecycle_status": "preview",
      "deprecation": {
          "fine_tune": 1720137600,
          "inference": 1720137600
      },
      "id": "babbage",
      "status": "succeeded",
      "created_at": 1646092800,
      "updated_at": 1688601600,
      "object": "model"
  }]



  function App() {
    return (
      <div className="App">
        <header className="App-header">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Model</TableCell>
                  <TableCell align="right">Created</TableCell>
                  <TableCell align="right">Updated&nbsp;(g)</TableCell>
                  <TableCell align="right">Lifecycle status&nbsp;(g)</TableCell>
                  <TableCell align="right">Notes&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{convertUnixTimestamp(row.created_at)}</TableCell>
                    <TableCell align="right">{convertUnixTimestamp(row.updated_at)}</TableCell>
                    <TableCell align="right">{row.lifecycle_status}</TableCell>
                    <TableCell align="right">&nbsp;</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <Button variant="contained">Hello World</Button>
          </div>
        </header>
      </div>
    );
  }
  
  export default App;
  
