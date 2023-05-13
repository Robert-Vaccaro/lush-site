import {useEffect, useState} from 'react';
import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TablePagination} from '@mui/material'
import {KeyboardArrowDown, KeyboardArrowUp, Edit} from '@mui/icons-material'
import SearchBar from "../components/SearchBar"
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import {getUsers} from "../server/UserRoutes"
//TODO:
  // Add scrolling with lazy loading

export default function CollapsibleTable() {
    let [users, setUsers] = useState([]);
    let [totalUsers, setTotalUsers] = useState(0);
    let [perPage, setPerPage] = useState(5);
    let [page, setPage] = useState(0);
    let [searchTerm, setSearchTerm] = useState("");

    var setUserList = (res) => {
        setTotalUsers(res.total)
        setUsers(res.data)
    }
    var handleChangePage = (e) => {
      if (e.target.getAttribute("data-testid") === "KeyboardArrowRightIcon") {
        setPage(page += 1)
      } else if ((e.target.getAttribute("data-testid") === "KeyboardArrowLeftIcon")) {
        setPage(page -= 1)
      }      
    }
    var handleChangeRowsPerPage = (e) => {
      setPerPage(e.target.value)
      setPage(0)
    }
    const fetchUsers = async () => {
      const res = await getUsers(searchTerm, page, perPage)
      setUserList(res)
    };
    useEffect(() => {
      fetchUsers()
      }, [searchTerm, page, perPage]);
  return (
    <div>
    <SearchBar updatedListProp={setSearchTerm} />
    <TableContainer component={Paper} sx={{marginTop:"75px", width:"80vw"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Apple ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">First</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users === 0 ? (
            <div></div>
          ) : (
            users.map((row) => (
              <Row key={row._id} row={row} />
            )
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPage={perPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        count={totalUsers}
      />
    </TableContainer>
    </div>
  );
}

  function Row({row}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    let editButtonClicked = (appleID) => {
      router.push("/spec-user?user="+appleID)
    }

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.appleID}
          </TableCell>
          <TableCell align="right">{row.username}</TableCell>
          <TableCell align="right">{row.firstName}</TableCell>
          <TableCell align="right">{row.lastName}</TableCell>
          <TableCell align="right">{row.paid.toString()}</TableCell>
          <TableCell align="right">
            <IconButton type="button" onClick={() => editButtonClicked(row.appleID)}>
              <Edit color="primary" />
            </IconButton>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Data of {row.username}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Created</TableCell>
                      <TableCell>AI</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="right">Total Messages</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                        {moment.unix(row.createdAt).format('dddd, MMMM Do, YYYY h:mm:ss A')}
                        </TableCell>
                        <TableCell>{row.isAI.toString()}</TableCell>
                        <TableCell align="center">{row.email_address}</TableCell>
                        <TableCell align="right">
                            {row.messageCount}
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }