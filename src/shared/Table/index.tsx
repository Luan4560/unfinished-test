import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@mui/material';
import { GenreTypeEnum, IGetRemixesQuery, useCreateRemixMutation } from '@/graphql/types/_server';

interface RemixesTableProps {
  remixInfo: IGetRemixesQuery | undefined;
}

export const RemixesTable = ({ remixInfo }: RemixesTableProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [formValues, setFormValues] = useState<any>({});

  const [createRemix, { data, client }] = useCreateRemixMutation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormValues({
      ...formValues,
      [event.target.name]: value
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log({
      authorEmail: formValues.authorEmail,
      description: formValues.description,
      genre: GenreTypeEnum.Jazz,
      isStore: true,
      name: formValues.name,
      price: Number(formValues.price),
      trackLength: Number(formValues.price)
    });

    await createRemix({
      variables: {
        authorEmail: formValues.authorEmail,
        description: formValues.description,
        genre: GenreTypeEnum.Jazz,
        isStore: true,
        name: formValues.name,
        price: Number(formValues.price),
        trackLength: Number(formValues.price)
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Genre</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {remixInfo?.remixes.items.map((remix) => (
              <TableRow key={remix.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {remix.genre}
                </TableCell>
                <TableCell align="right">{remix.description}</TableCell>
                <TableCell align="right">{remix.name}</TableCell>
                <TableCell align="right">{remix.authorEmail}</TableCell>
                <TableCell align="right">{remix.price}</TableCell>
                <TableCell align="right">
                  <Box>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => setOpenForm(!openForm)}
                    >
                      <AddToPhotosIcon color="success" />
                    </Button>

                    <Button variant="outlined" color="error">
                      <DeleteForeverIcon color="error" />
                    </Button>

                    <Button variant="outlined" color="warning">
                      <EditIcon color="warning" />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openForm && (
        <div>
          <Box
            component="form"
            style={{ display: 'flex' }}
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              id="outlined-basic"
              name="genre"
              size="small"
              label="Genre"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="description"
              size="small"
              label="Description"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="name"
              size="small"
              label="Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="authorEmail"
              size="small"
              label="Author"
              variant="outlined"
              type="email"
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="price"
              size="small"
              label="Price"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              name="isStore"
              size="small"
              label="Has in Store ?"
              variant="outlined"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="info">
              Send
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};
