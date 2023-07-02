import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Error = ({ message }: { message?: string }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout;
    if (message) {
      setVisible(true)
      timeout = setTimeout(() => {
        setVisible(false)
      }, 3000)
    }
    return () => {
      timeout = null;
    }
  }, [message])

  return (
    visible ? <ErrorWrapper> {message}</ErrorWrapper > : <></>
  )
}

export default Error

const ErrorWrapper = styled.div`
  width: 100%;
  height: 48px;
  background-color: #feb4b6;
  color: #ff5155;
  display: flex;
  align-items: center;
  justify-content: center;
`
