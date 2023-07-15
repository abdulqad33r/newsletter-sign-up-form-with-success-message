import React, { FormEvent, useState } from "react"
import "./Form.scss"

interface props {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setShowSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>
}

const Form: React.FC<props> = ({ email, setEmail, setShowSuccessMessage }) => {
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false)

  const HandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!email) {
      setInvalidEmail(true)
      return
    }

    setShowSuccessMessage(true)
  }

  return (
    <div className="form-container">
      <div className="form">
        <picture>
          <source
            media="(width > 375px)"
            srcSet={
              import.meta.env.BASE_URL +
              "/images/illustration-sign-up-desktop.svg"
            }
          />
          <source
            media=""
            srcSet={
              import.meta.env.BASE_URL +
              "/images/illustration-sign-up-mobile.svg"
            }
          />

          <img
            src={
              import.meta.env.BASE_URL +
              "/images/illustration-sign-up-desktop.svg"
            }
            alt="illustration-sign-up"
          />
        </picture>

        <section>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul role="list">
            {[
              "Product discovery and building what matters",
              "Measuring to ensure updates are a success",
              "And much more!",
            ].map((item, index) => (
              <li key={index}>
                <img
                  src={import.meta.env.BASE_URL + "/images/icon-list.svg"}
                  alt="list-icon"
                />
                {item}
              </li>
            ))}
          </ul>

          <form className="input-container" onSubmit={HandleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className={invalidEmail ? "invalid" : ""}
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Valid email required</span>

            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Form
