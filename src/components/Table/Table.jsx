import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(cidade, clientes, ticket, oldTicket, faturamento, oldFaturamento) {
  return { cidade, clientes, ticket, oldTicket, faturamento, oldFaturamento };
}

const rows = [
  createData("AFONSO CLÁUDIO", 2456, 97, 96, 1245, 1223),
  createData("BREJETUBA", 1345, 97, 98, 1245, 1245),
  createData("CACHOEIRO DE ITAPEMIRIM", 4567, 97, 97, 1245, 1345),
  createData("CHALÉ", 1456, 97, 95, 1245, 1243),
];

const makeStyle = (atual, anterior) => {

  let textColor;

  if (atual > anterior) {
    textColor = 'green';
  } else if (atual < anterior) {
    textColor = 'red';
  } else {
    textColor = '#41AEFE';
  }

  return {
    color: textColor
  };
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3></h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cidade</TableCell>
              <TableCell align="left">Clientes</TableCell>
              <TableCell align="left">Ticket Médio</TableCell>
              <TableCell align="left">Faturamento</TableCell>
              <TableCell align="left">Detalhes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.cidade}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.cidade}
                </TableCell>
                <TableCell align="left">{row.clientes}</TableCell>
                <TableCell align="left" className="ticket" style={makeStyle(row.ticket, row.oldTicket)}>{formatCurrency(row.ticket)}</TableCell>
                <TableCell align="left">
                  <span className="faturamento" style={makeStyle(row.faturamento, row.oldFaturamento)}>{formatCurrency(row.faturamento)}</span>
                </TableCell>
                <TableCell align="left" className="detalhes"><button className="buttonDetalhes">Ver</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}