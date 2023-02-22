import TableCell from '@mui/material/TableCell';

export const getFirstCell = (text) => {
    return <TableCell 
                align="right" 
                sx={{border: 0, paddingLeft: 0, paddingRight: '10px', paddingTop: 0, paddingBottom: 0, width: '150px'}}>
                    {text}
              </TableCell>
}