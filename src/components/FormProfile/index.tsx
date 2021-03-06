import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My Profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Cage"
      />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="E-mail"
        initialValue="joaom.oliveira@gmail.com"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
