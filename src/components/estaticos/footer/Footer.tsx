import './Footer.css'
import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let footerComponent;

  if (token != '') {
    footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box className='box1' >
          <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.linkedin.com/in/elianespsilva-dev/" target="_blank" rel="noreferrer">
              <LinkedInIcon className='redes' />
            </a>
            <a href="https://www.instagram.com/elianespsilva/" target="_blank" rel="noreferrer">
              <InstagramIcon className='redes' />
            </a>
            <a href="https://github.com/eliane-sp-silva" target="_blank" rel="noreferrer">
              <GitHubIcon className='redes' />
            </a>
          </Box>
        </Box>
        <Box className='box2'>
          <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org" rel="noreferrer"
              className='text-decorator-none'>
              <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }

  return (
    <>
      {footerComponent}

    </>
  )
}

export default Footer