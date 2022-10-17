import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Heading } from '../components/Heading/Heading';
import { Text } from '../components/Text/Text';
import { TextInput } from '../components/TextInput/TextInput';
import { Logo } from '../Logo';

export function SignIn(){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions',  {
      email: 'mesquini@live.com',
      password: '12345678',
    });

    setIsUserSignedIn(true);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>

        <Text className="text-gray-400 mt-1" size="lg">
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label className="flex flex-col gap-3" htmlFor="email">
          <Text className="font-semibold">
            Endereço de e-mail:
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id='email' placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>
        <label className="flex flex-col gap-3" htmlFor="password">
          <Text className="font-semibold">
            Digite sua senha:
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id='password' placeholder="**********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id='remember' />
          <Text size='sm' className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className="mt-4" type='submit'>
          Entrar na plataforma
        </Button>
      </form>

      {isUserSignedIn && <Text>Login Realizado!</Text>}

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size='sm' asChild>
          <a href="#" className='text-gray-400 underline transition-colors hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text size='sm' asChild>
          <a href="#" className='text-gray-400 underline transition-colors hover:text-gray-200'>Não possui conta? Crie uma agora!?</a>
        </Text>
      </footer>

    </div>
  )
}