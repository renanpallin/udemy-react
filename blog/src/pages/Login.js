import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Input from '../components/Input';
import Button from '../components/Button';
import Switch from '../components/Switch';
import { useDispatch } from 'react-redux';
import { login, subscribe } from '../actions/authActions';
import Alert from '../components/Alert';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isSubscribe, setisSubscribe] = useState(false); // login | subscribe
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (isSubscribe) {
      if (password !== passwordConfirmation) {
        return setErrorMessage('Senhas diferentes.');
      }
      dispatch(subscribe({ email, password, name })).then((fakeResult) => {
        if (fakeResult.error) {
          return setErrorMessage(fakeResult.error);
        }
        alert(
          'tudo certinho, salvar token para próximas requisições e history.push'
        );
      });
    }
    dispatch(login({ email, password })).then((fakeResult) => {
      if (fakeResult.error) {
        return alert('tratamento de erro e menssagem aqui');
      }
      alert(
        'tudo certinho, salvar token para próximas requisições e history.push'
      );
    });
  }

  return (
    <>
      <h1>Bem vindo{isSubscribe ? '' : ' de volta'}!</h1>
      <Container>
        <Row>
          <Switch
            id="login-switch"
            label={
              isSubscribe ? (
                <>
                  Entrar/<strong>Cadastrar</strong>
                </>
              ) : (
                <>
                  <strong>Entrar</strong>/Cadastrar
                </>
              )
            }
            checked={isSubscribe}
            onToggle={setisSubscribe}
          ></Switch>
        </Row>
        {errorMessage ? (
          <Row>
            <Alert severity="danger">{errorMessage}</Alert>
          </Row>
        ) : null}
        <Row>
          <form onSubmit={onSubmit}>
            <Input
              id="email"
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              type="email"
            />
            <Input
              id="password"
              label="Senha"
              value={password}
              onChangeText={setPassword}
              type="password"
            />
            {isSubscribe ? (
              <>
                <Input
                  id="confirm-password"
                  label="Confirmação de senha"
                  value={passwordConfirmation}
                  onChangeText={setPasswordConfirmation}
                  type="password"
                />
                <Input
                  id="name"
                  label="Nome"
                  value={name}
                  onChangeText={setName}
                />
              </>
            ) : null}
            <Button>Entrar</Button>
          </form>
        </Row>
      </Container>
    </>
  );
}
