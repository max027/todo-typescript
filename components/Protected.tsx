import { useAuthContext } from '@/context/ContextProvider'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Protected = ({children}:{children:React.ReactNode}) => {
  const {user}=useAuthContext()
  const router=useRouter()
  useEffect(()=>{
      if(!user){
          router.push('/login')
        }
    },[router,user])
  return (
      <div>{user?children:null}</div>  
  )
}

export default Protected
