import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import { buscaId, deleteId, post } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import './DeletarPostagem.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [postagem, setPostagem] = useState<Postagem>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
      if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          navigate("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/postagens/${id}`, setPostagem, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          navigate('/posts') //rota do front
          deleteId(`/postagens/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Postagem deletada com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        }
      
        function nao() {
          navigate('/posts')
        } 

  return (
    <>
      <Box m={2}  display="flex" justifyContent="center" alignItems="center">
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button 
              onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  
              onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;