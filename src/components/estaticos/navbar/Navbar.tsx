import './Navbar.css'
import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'


function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    navigate('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to='/home'
            className='text-decorator-none' >
            <Box className='cursor' >
              <Typography className='cursor' variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>
          </Link>

          <Box display="flex" justifyContent="start">
            <Link to='/home'
              className='text-decorator-none'>
              <Box mx={1} >
                <Typography className='cursor' variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to='/posts'
              className='text-decorator-none'>
              <Box mx={1} >
                <Typography className='cursor' variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to='/temas'
              className='text-decorator-none'>
              <Box mx={1} >
                <Typography className='cursor' variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to='/formularioTema' className='text-decorator-none'>
            <Box  mx={1} >
              <Typography className='cursor' variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            </Link>
            <Link to='/login' className='text-decorator-none'>
              <Box mx={1} onClick={goLogout} >
                <Typography variant="h6" className='cursor' color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar