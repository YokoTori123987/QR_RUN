import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  SelectField,
  DateField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />

                  <Label
                    name="firstname"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    firstname
                  </Label>
                  <TextField
                    name="firstname"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'firstname is required',
                      },
                    }}
                  />

                  <FieldError name="firstname" className="rw-field-error" />

                  <Label
                    name="lastname"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    lastname
                  </Label>
                  <TextField
                    name="lastname"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'lastname is required',
                      },
                    }}
                  />

                  <FieldError name="lastname" className="rw-field-error" />

                  <Label
                    name="lastname"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Gender
                  </Label>
                  <SelectField name='gender' className='w-full rw-input'>
                    <option>Male</option>
                    <option>Female</option>
                  </SelectField>

                  <Label
                    name="dateofbirth"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Dateofbirth
                  </Label>
                  <DateField name='dateofbirth' className='w-full rw-input' />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
