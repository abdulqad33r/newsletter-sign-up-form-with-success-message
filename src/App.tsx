import { useState } from "react"
import "./App.css"
import { Form, SuccessMessage } from "./components/Container"

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false),
    [email, setEmail] = useState<string>("")

  return showSuccessMessage ? (
    <SuccessMessage
      email={email}
      setEmail={setEmail}
      setShowSuccessMessage={setShowSuccessMessage}
    />
  ) : (
    <Form
      email={email}
      setEmail={setEmail}
      setShowSuccessMessage={setShowSuccessMessage}
    />
  )
}

export default App
