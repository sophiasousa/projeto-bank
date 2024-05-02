import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [cpfField, setcpfField] = useState<string>('')
  const [loginPage, setLoginPage] = useState('1') //Tela de login
  const [forgotPage, setForgotPage] = useState('0') //Tela de Recuperar Senha
  const [signUpPage, setSignUpPage] = useState('0') //Tela de Cadastro

  // Função para entrar ou voltar na página de login
  const handleLoginPage = () => {
    alert
    setLoginPage('0')
    setForgotPage('0')
    setSignUpPage('1')
  }

  // Função do Esqueci minha senha
  const handleForgotButton = () => {
    setLoginPage('0')
    setForgotPage('1')
    setSignUpPage('0')
  }

  // Função do Botão Entrar
  const handleLoginButton = () => {
    alert(emailField)
    alert('senha renovada com sucesso')
  } 

  const handleBackButton = () => {
    setLoginPage('1')
    setForgotPage('0')
    setSignUpPage('0')
  } 

  // Função do Cadastre-se
  const handleSignUpButton = () => {
    setLoginPage('0')
    setForgotPage('0')
    setSignUpPage('1')
  }

  return (
    <ScrollView style={styles.scrollview}>
    {loginPage == '1' &&
      <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackButton}>
          <Image style={styles.backButton} source={require('./assets/icons8-back-64.png')}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Text style={styles.sistemadelogin}>Sistema de Login</Text>
        <Text style={styles.bemvindo}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CPF</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu CPF'
            placeholderTextColor='#d1d1d1'
            value={cpfField}
            onChangeText={t => setcpfField(t)}
            autoCapitalize='none'

          />
        </View>
        <View>
        </View>


        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttondoentrar} onPress={handleLoginButton}>
          <Text style={styles.buttonTextdoentrar}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.buttonnaotemconta}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.Botaodocadastrar}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Sophia</Text>
        </View>
      </View>
      </>
    }
    {forgotPage == '1' && 
      <> 
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackButton}>
          <Image style={styles.backButton} source={require('./assets/icons8-back-64.png')}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Text style={styles.sistemadelogin}>IBANK</Text>
        <Text style={styles.recuperarsenha}>Recupere sua senha.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Nova senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Confirmar nova senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
          />
        </View>
        <TouchableOpacity style={styles.buttondeconfirmarsenha} onPress={handleLoginButton}>
          <Text style={styles.buttonTextdeconfirmarsenha}>Feito!</Text>
        </TouchableOpacity>
        </View>
      </>
      
    }
    {signUpPage == '1' && 
      <>
        <View style={styles.container}>
        <TouchableOpacity onPress={handleBackButton}>
          <Image style={styles.backButton} source={require('./assets/icons8-back-64.png')}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Text style={styles.sistemadelogin}>Cadastre-se e seja mais um de nossos clientes.</Text>
        <Text style={styles.bemvindo}> Digite seus dados abaixo.</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CPF</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu CPF'
            placeholderTextColor='#d1d1d1'
            value={cpfField}
            onChangeText={t => setcpfField(t)}
            autoCapitalize='none'

          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Crie uma Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.buttondocadastrofeito} onPress={handleLoginButton}>
          <Text style={styles.buttonTextdocadastrofeito}>Cadastro feito</Text>
        </TouchableOpacity>
        </View>
      </>
     
    }
    </ScrollView>
  )
}