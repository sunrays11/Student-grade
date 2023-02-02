import { Button, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import React, { FC } from 'react'
import { Student } from './student.data'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';



const StudentList: FC = () => {

    const navigate = useNavigate();

    const [selectedRow, setSelectedRow] = React.useState({});
    console.log({ selectedRow });

    function add(m: number = 0.00, s: number = 0.00, l: number = 0.00) {
        return m + s + l;
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Student.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>

            <Stack
                direction="row"
                justifyContent="right"
                alignItems="right"
                spacing={2}
            >
                <Button variant="contained" onClick={() => navigate("/student/create")}>ADD</Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Stack>

            <Typography variant="h4" sx={{ mt: 8, mb: 4 }}> StudentList</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Students</TableCell>
                            <TableCell align="right">Class</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Average</TableCell>
                            <TableCell align="right">Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(Student.length > 0
                            ? Student.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : Student
                        ).map((row) => (
                            <TableRow key={row.name} >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell style={{ width: '25%' }} align="right">
                                    {row.classid}
                                </TableCell>
                                <TableCell style={{ width: '25%' }} align="right">
                                    {add(row.maths, row.science, row.lang)}
                                </TableCell>
                                <TableCell style={{ width: '25%' }} align="right">
                                    {row.average}
                                </TableCell>
                                <TableCell style={{ width: '25%' }} align="right">
                                    <Rating readOnly precision={0.5} defaultValue={row.grades} ></Rating>
                                </TableCell>
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
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={6}
                                count={Student.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
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
        </Container>
    )
}
export default StudentList;
