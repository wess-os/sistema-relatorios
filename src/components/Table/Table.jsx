import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Joaozinho", 18908424, "02/03/2022", "Instalado"),
  createData("Marquinhu", 18908424, "04/03/2022", "Cancelado"),
  createData("Fabinho", 18908424, "01/03/2022", "Instalado"),
  createData("Gabrielzinho", 18908421, "05/03/2022", "Aberto"),
];


const makeStyle=(status)=>{
  if(status === 'Instalado')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  }
  else if(status === 'Cancelado')
  {
    return{
      background: '#ffadad8f',
      color: 'red'
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white'
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Destaques</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Vendedor</TableCell>
              <TableCell align="left">Protocolo</TableCell>
              <TableCell align="left">Data</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}