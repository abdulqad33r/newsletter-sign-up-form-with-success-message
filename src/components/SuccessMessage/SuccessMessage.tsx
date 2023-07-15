import React from "react"
import "./SuccessMessage.scss"

interface props {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setShowSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>
}

const SuccessMessage: React.FC<props> = ({
  email,
  setEmail,
  setShowSuccessMessage,
}) => {
  return (
    <div className="success-message-container">
      <div className="success-message">
        <div>
          <img src={import.meta.env.BASE_URL + "/images/icon-success.svg"} alt="success-icon" />

          <h1>Thanks for subscribing!</h1>

          <p>
            A confirmation email has been sent to {email}. Please open it and
            click the button inside to confirm your subscription.
          </p>
        </div>

        <button
          onClick={() => {
            setShowSuccessMessage(false)
            setEmail("")
          }}>
          Dismiss message
        </button>
      </div>
    </div>
  )
}

export default SuccessMessage
