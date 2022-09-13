import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import classNames from "../ProfileInfo.module.sass";


const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  const activateEditMode = () => {
    setEditMode(true)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  return (
    <div className={classNames.status}>
      {!editMode &&
        <div className={classNames.status_text}>
          <span onDoubleClick={activateEditMode}>{props.status || 'ADD STATUS'}</span>
        </div>
      }
      {editMode &&
        <div className={classNames.status_input}>
          <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} type="text" />
        </div>
      }
    </div>
  )

}

export default ProfileStatusWithHooks
