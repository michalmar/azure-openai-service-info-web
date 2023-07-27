import React from 'react';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// function that converst unnixtimestamp to date
function convertUnixTimestamp(unixTimestamp) {
  return new Date(unixTimestamp * 1000).toISOString().slice(0, 10);
}


async function fetchModels() {

    // const query = `
    //     {
    //       openai {
    //         items {
    //           id
    //           data
    //         }
    //       }
    //     }`;

        const query = `
        {
          people {
            items {
              id
              Name
            }
          }
        }`;
        
        
    const endpoint = "http://localhost:4280/data-api/graphql";
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query })
    });
    const result = await response.json();
    // console.table(result.data.openai.items);
    console.table(result.data.people.items);
  }


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
    "id": "curie",
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
    "id": "davinci",
    "status": "succeeded",
    "created_at": 1646092800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": true,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "gpt-35-turbo",
    "status": "succeeded",
    "created_at": 1678320000,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1705276800
    },
    "id": "gpt-35-turbo",
    "status": "succeeded",
    "created_at": 1687132800,
    "updated_at": 1687132800,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1705276800
    },
    "id": "gpt-35-turbo-16k",
    "status": "succeeded",
    "created_at": 1687132800,
    "updated_at": 1687132800,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": true,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1696118400
    },
    "id": "gpt-35-turbo",
    "status": "succeeded",
    "created_at": 1677628800,
    "updated_at": 1677628800,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": false,
      "completion": false,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "gpt-4",
    "status": "succeeded",
    "created_at": 1679356800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1705276800
    },
    "id": "gpt-4",
    "status": "succeeded",
    "created_at": 1687132800,
    "updated_at": 1687132800,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": false,
      "completion": true,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "gpt-4-32k",
    "status": "succeeded",
    "created_at": 1679356800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": true,
      "chat_completion": true,
      "embeddings": false
    },
    "lifecycle_status": "generally-available",
    "deprecation": {
      "inference": 1705276800
    },
    "id": "gpt-4-32k",
    "status": "succeeded",
    "created_at": 1687132800,
    "updated_at": 1687132800,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": true,
      "chat_completion": false,
      "embeddings": false
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "fine_tune": 1720137600,
      "inference": 1720137600
    },
    "id": "code-cushman-001",
    "status": "succeeded",
    "created_at": 1642809600,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-similarity-ada-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-similarity-babbage-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-similarity-curie-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-similarity-davinci-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-ada-doc-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-ada-query-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-babbage-doc-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-babbage-query-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-curie-doc-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-curie-query-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-davinci-doc-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "text-search-davinci-query-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "code-search-ada-code-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "code-search-ada-text-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "code-search-babbage-code-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1720137600
    },
    "id": "code-search-babbage-text-001",
    "status": "succeeded",
    "created_at": 1653004800,
    "updated_at": 1688601600,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1738454400
    },
    "id": "text-embedding-ada-002",
    "status": "succeeded",
    "created_at": 1675296000,
    "updated_at": 1675296000,
    "object": "model"
  },
  {
    "capabilities": {
      "fine_tune": false,
      "inference": true,
      "completion": false,
      "chat_completion": false,
      "embeddings": true
    },
    "lifecycle_status": "preview",
    "deprecation": {
      "inference": 1743638400
    },
    "id": "text-embedding-ada-002",
    "status": "succeeded",
    "created_at": 1680480000,
    "updated_at": 1680480000,
    "object": "model"
  }

]



function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>Azure OpenAI - model availability</Item>
            </Grid>
            <Grid xs={4}>
              <Item>France Central</Item>
            </Grid>
            <Grid xs={10}>
              <Item>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Updated</TableCell>
                        <TableCell align="right">Lifecycle status</TableCell>
                        <TableCell align="right">Notes</TableCell>
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
              </Item>
            </Grid>
            <Grid xs={2}>
              <Item><Button onClick={fetchModels} variant="contained">Hello World</Button></Item>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;

