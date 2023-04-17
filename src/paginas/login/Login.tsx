import React from 'react'
import {Grid, Box, Typography, TextField, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import './Login.css'
import UsuarioLogin from '../../models/UsuarioLogin'
import { login } from '../../service/Service'
import useLocalStorage from 'react-use-localstorage'


function Login() {

  // Hook responsável por navegar o usuário de uma tela para outra, sem precisar de um Link
  const history = useNavigate()

  // Hook customizado, para adicionar informações no LocalStorage do navegador
  const [token, setToken] = useLocalStorage('token')

  // Hook para controle de estado da Váriavel de UsuarioLogin, irá manter os dados de email e senha durante o preenchimento do formulário pelo usuário
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token: ''
  })

  // função responsável por pegar o que foi digitado no campo, e atualizar o estado do Usuario
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  // Função responsável por enviar o pedido de login para a service do front, e consequentemente, para o backend. É uma função assincrona, pois precisa aguardar o backend devolver alguma resposta
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await login('/usuarios/logar', userLogin, setToken)
      alert('Usuario logado com sucesso')

    } catch(error) {
      console.log(error);
      alert('Usuário ou senha inválidos')
    }
  }

  // Hook de controle de "efeito colateral" que irá ficar monitorando a variavel token, e quando ela mudar, vai cair no if... caso seja verdadeiro, navega nosso usuário para a tela de Home
  useEffect(() => {
    if(token !== '') {
      history('/home')
    }
  }, [token])
    
    
    return(
       <Grid container direction= "row" justifyContent={'center'} alignItems={'center'} className='fundo'>
            <Grid alignItems={'center'} xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom component="h3" align="center" style={{fontWeight:'bold'}} className='textos1'>Entrar</Typography>
                        <TextField id={'usuario'} label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth ></TextField>
                        <TextField id={'senha'} label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth ></TextField>
                        <Box marginTop={2} textAlign={'center'}>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' fullWidth>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
       </Grid>
    )
}

export default Login