import React from 'react'
import classnames from './Login.module.sass'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const LoginForm = (props) => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    props.loginUser(data.email, data.password, data.rememberMe)
    reset()

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classnames.input_box}>
        <input
          style={{ border: errors?.email ? '1px solid red' : '1px solid teal' }}
          className={classnames.input}
          type="text"
          placeholder='Email'
          // value={value}
          // onChange={onInputNameChange}
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа'
            }
          })}
        />
        <div className={classnames.error}>{errors?.email && <span>{errors?.email?.message || 'Login is not value'}</span>}</div>
      </div>
      <div className={classnames.input_box}>
        <input
          style={{ border: errors?.password ? '1px solid red' : '1px solid teal' }}
          className={classnames.input}
          type="password"
          placeholder='password'
          {...register('password', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 6,
              message: 'Минимум 6 символа'
            }
          })}
        />
        <div className={classnames.error}>{errors?.password && <span>{errors?.password?.message || 'password is not value'}</span>}</div>
      </div>
      <label className={classnames.label}>
        <input
          type="checkbox"
          {...register('rememberMe', {
            required: false,
          })}
        />
        remember me
      </label>
      <div>
        <button
          className={classnames.button}
          type='submit'
          disabled={!isValid}
        >
          Login
        </button>
      </div>
    </form>
  )
}


const Login = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth) {

      navigate(`/`)

    }
  }, [props.isAuth])




  return (
    <div className={classnames.inner}>
      <h2 className={classnames.title}>Login</h2>
      <LoginForm loginUser={props.loginUser} />
    </div>
  )
}

export default Login
