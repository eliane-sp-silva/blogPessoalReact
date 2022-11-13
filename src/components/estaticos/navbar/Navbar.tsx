import './Navbar.css'
import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { addToken } from '../../../store/tokens/actions'
import {toast} from 'react-toastify';


function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  function goLogout() {
    //setToken('') >> com o uso de redux para o token não será utilizado, pois ao atualizar a página o usuário é deslogado automaticamente.
    dispatch(addToken(''));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,//mostrar progresso
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false, //não mover toast
      theme: "colored",
      progress: undefined,
    })
    navigate('/login')
  }
  let navbarComponent;

  if (token != '') {
    navbarComponent = <AppBar position="static">
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
            <Box mx={1} >
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
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar