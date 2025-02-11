import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline,  Toolbar, Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid2';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <PhotoCamera className='mr-5'/>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className='bg-gray-100 pt-8 pb-6'>
          <Container maxWidth="sm" >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Hello everyone, this is a photo album and I&apos;m trying to make this sentence as long as possible so we can see how it looks on the screen.
            </Typography>
            <div className='mt-10'>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className='py-5'>
          <Grid container spacing={6}>
            {Array.from(Array(12)).map((_, index) => (
              <Grid key={index} xs={12} sm={6} md={4}>
                <Card className='h-full flex flex-col'>
                  <CardMedia
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg'
                    title='Image title'
                    className='pt-[56.25%] object-cover' // 16:9 aspect ratio

                    
                  />
                  <CardContent  className='flex-grow'>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className='py-6 bg-gray-100'>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  )
}

export default App
