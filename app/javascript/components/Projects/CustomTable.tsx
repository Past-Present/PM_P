import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#80A4AE",
    color: theme.palette.common.white,
    whiteSpace: "nowrap"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Column<T> {
  label: string;
  field?: keyof T;
  render?: (row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data: T[];
  sx?: {};
}

const CustomTable = <T,>({ columns, data, sx }: CustomTableProps<T>) => {  return (
    <TableContainer component={Paper} sx={sx}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              columns.map((col, index: number) => (
                <StyledTableCell key={index} align="left">{col.label}</StyledTableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row, rowIndex: number) => (
              <StyledTableRow key={rowIndex}>
                {
                  columns.map((col, colIndex: number) => (
                    <StyledTableCell key={colIndex} align="left">
                      {col.render ? col.render(row) : row[col.field]}
                    </StyledTableCell>
                  ))
                }
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
