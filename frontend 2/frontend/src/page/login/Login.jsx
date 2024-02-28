import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthContext from "../../hook/useAuthContext"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import image from "../../assets/image/login.svg"
import "./Login.css"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signEd } = useAuthContext()

  const handleSignIn = async (e) => {
    e.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  if (signEd) {
    return navigate("/home")
  } else {
    return (
      <>
        <div className="main formMain">
          <div className="formGroup">
            <div className="image">
              <img
                src={image}
                alt="Desenho de notebook e uma Pessoa na frete de uma notebook na cor roxa"
              />
            </div>

            <Form onSubmit={handleSignIn} className="formSignin">
              <InputGroup className="inputGroup mb-4">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="joao-vior@teste.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputGroup>

              <InputGroup className="inputGroup mb-5">
                <Form.Label>Senha:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputGroup>
              <Button
                className="buttonSignin"
                variant="outline-success"
                size="lg"
                type="submit"
              >
                Logar
              </Button>
            </Form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
