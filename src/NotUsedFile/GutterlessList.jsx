import React from 'react'

export const GutterlessList = ({myProp}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
      <TableBody>
      {myProp.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
          </Table>
    </TableContainer>
  )
}
