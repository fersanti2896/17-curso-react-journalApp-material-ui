import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
    return (
        <>
            <Grid alignItems="center"
                  direction="column"
                  container 
                  justifyContent="center"
                  spacing={ 0 }
                  sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} >
                    <Grid item
                          className='box-shadow'
                          xs={ 3 }
                          sx={{ backgroundColor: 'white', borderRadius:2 , padding: 3 }} >
                            <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>
                            <form>
                                <Grid container>
                                    <Grid item sx={{ mb: 2 }} xs={ 12 } >
                                        <TextField label='Correo' 
                                                   placeholder='correo@google.com' 
                                                   type='email'
                                                   fullWidth />
                                    </Grid>

                                    <Grid item sx={{ mb: 2 }} xs={ 12 }>
                                        <TextField label='Contraseña' 
                                                   placeholder='Contraseña' 
                                                   type='password'
                                                   fullWidth />
                                    </Grid>

                                    <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                                        <Grid item xs={ 12 } sm={ 6 }>
                                            <Button fullWidth variant='contained'>
                                            <Typography>Login</Typography>
                                            </Button>
                                        </Grid>

                                        <Grid item xs={ 12 } sm={ 6 }>
                                            <Button fullWidth variant='contained'>
                                                <Google />
                                                <Typography sx={{ ml: 1 }}>Google</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid container direction='row' justifyContent='end'>
                                        <Link color='inherit' 
                                              component={ RouterLink } 
                                              to='/auth/register'>
                                            Crear una cuenta
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                    </Grid>
            </Grid>
        </>
    )
}
