import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import { BodyText, HeadingLarge, MainContainer, TableLayout, ParaContainer } from '../styles'
import { AppContext } from '../provider/AppContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  function stringToColor(string) {
    let hash = 0
    let i
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2)
    }  
    return color
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        width: 24,
        height: 24,
        bgcolor: stringToColor(name),
        marginRight: 0.4,
        fontSize:12
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

export default function Friends() {

    const { users } = useContext(AppContext)
    let usersFilteredByCondition = users.filter(obj => obj.balanceNum < 2000 && !obj.isActive)

    return (
        <div className="Friends">
            <HeadingLarge>
                List of Friends
                <span style={{paddingLeft: '0.2rem', color:'#52525B', fontSize: '1.4rem'}}>({usersFilteredByCondition.length})</span>
            </HeadingLarge>
              <div style={{marginTop:'0.8rem', textAlign:'center'}}>
                <Link style={{color:'#52525B', fontWeight:'400', textDecoration:'underline'}} to ="/">
                  Go Back Home
                </Link>
              </div>
            <MainContainer>
                <ParaContainer>
                    <BodyText>List of friends of all employees who aren't active and have a balance of less than $2k.</BodyText>
                </ParaContainer>
                <TableLayout>
                <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Balance</TableCell>
                        <TableCell align="center">Active</TableCell>
                        <TableCell align="right">Friends</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {usersFilteredByCondition.map((row, idx) => (
                        <StyledTableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <StyledTableCell align="left">{idx+1}</StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            <span style={{display:'flex', alignItems:'center'}}>
                                <Avatar {...stringAvatar(row.name)}/>
                                {row.name}
                            </span>
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.balance}</StyledTableCell>
                        <StyledTableCell align="center">{row.active ? 'Yes' : 'No'}</StyledTableCell>
                        <StyledTableCell align="right">
                            {row.friends.slice(0, 2).map(friend => ` ${friend.name}`) + ', ' + row.friends[2].name}
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </TableLayout>
            </MainContainer>
        </div>
    )
}
