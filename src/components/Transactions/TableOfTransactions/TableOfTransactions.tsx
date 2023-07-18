import { useEffect, useState } from "react";
import { Transaction } from "../../../api/transactionServices/types";
import { getAllTransactions } from "../../../api/transactionServices/getAllTransactions";
import Loading from "../../Loading/Loading";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePaginationActions } from "../Pagination/Pagination";
import { TableHead } from "@mui/material";
import styles from "./TableOfTransactions.module.scss";

const TableOfTransactions = ({ searchValue }: { searchValue: string }) => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  useEffect(() => {
    getAllTransactions().then((data) => {
      setTransactions(data);
    });
    setIsLoading(false);
  }, []);

  if (!transactions) {
    return;
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    "Account",
    "Address",
    "Amount",
    "Beneficiary",
    "Date",
    "Description",
    "ID",
  ];

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles["table__wrapper"]}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 395 }}>
          <Table stickyHeader sx={{ minWidth: 420 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? transactions.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : transactions
              )
                .filter((transaction) =>
                  transaction.beneficiary
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell component="th" scope="row">
                      {transaction.account}
                    </TableCell>
                    <TableCell align="right">{transaction.address}</TableCell>
                    <TableCell align="right">{transaction.amount}</TableCell>
                    <TableCell align="right">
                      {transaction.beneficiary}
                    </TableCell>
                    <TableCell align="right">{transaction.date}</TableCell>
                    <TableCell align="right">
                      {transaction.description}
                    </TableCell>
                    <TableCell align="right">{transaction.id}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={transactions.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TableOfTransactions;
