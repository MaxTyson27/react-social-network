import React from 'react'
import { useForm } from 'react-hook-form'
import classNames from './ProfileInfo.module.sass'

const ProfileDataForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all'
  })

  const onSubmit = (data) => {
    const otherData = {
      userId: props.userId,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
      aboutMe: data.aboutMe,
      contacts: {
        github: data.github,
        vk: data.vk,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        website: data.website,
        youtube: data.youtube,
        mainLink: data.mainLink,
      }
    }
    props.updateProfile(otherData)
    reset()
    props.activateEditMode()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
      <div>
        <label htmlFor="checkbox">Статус работы</label>
        <input
          {...register('lookingForAJob')}
          type="checkbox"
          id='checkbox'
          className={classNames.input}
        />
      </div>
      <Input label='lookingForAJobDescription' register={register} required placeholder='Описание работы' />
      <Input label='fullName' register={register} required placeholder='fullName' />
      <Input label='mainLink' register={register} required placeholder='Main Link' />
      <Input label='github' register={register} required placeholder='GitHub' />
      <Input label='youtube' register={register} required placeholder='youtube' />
      <Input label='instagram' register={register} required placeholder='instagram' />
      <Input label='vk' register={register} required placeholder='vk' />
      <Input label='website' register={register} required placeholder='website' />
      <Input label='twitter' register={register} required placeholder='twitter' />
      <Input label='facebook' register={register} required placeholder='facebook' />
      <Input label='aboutMe' register={register} required placeholder='Обо мне' />
      <button className={classNames.btn} type='submit'>
        Save
      </button>
    </form>
  )
}

const Input = ({ label, register, required, placeholder }) => (
  <>
    <input placeholder={placeholder} {...register(label, { required: false })} />
  </>
);


export default ProfileDataForm
