import {useEffect, useState} from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia} from '@mui/material'
import { Edit} from '@mui/icons-material'
import SearchBar from "../components/SearchBar"
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import {getGirls} from "../server/UserRoutes"
export default function CollapsibleTable() {
    let [girls, setGirls] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");
    
    const fetchGirls = async () => {
      const res = await getGirls()
      setGirls(res)
    };

    useEffect(() => {
      fetchGirls()
      }, []);
  return (
    <div>
    <SearchBar updatedListProp={setSearchTerm} />
    <TableContainer component={Paper} sx={{marginTop:"75px", width:"80vw"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Profile Pic</TableCell>
            <TableCell align="right">Girl's Name</TableCell>
            <TableCell align="right">User Count</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {girls === 0 ? (
            <div></div>
          ) : (
            girls.map((row) => (
              <Row key={row._id} row={row} />
            )
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

  function Row({row}) {
    const router = useRouter();
    let editButtonClicked = (girlHandle) => {
      router.push("spec-girl?girl="+girlHandle)
    }

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row">
            <CardMedia component='img' src={row.profilePic} sx={{ width: '50px', height: 'auto' }}/>
          </TableCell>
          <TableCell align="right">{row.girlName}</TableCell>
          <TableCell align="right">{row.userCount}</TableCell>
          <TableCell align="right">
            <IconButton type="button" onClick={() => editButtonClicked(row.girlHandle)}>
              <Edit color="primary" />
            </IconButton>
          </TableCell>
        </TableRow>
      </>
    );
  }