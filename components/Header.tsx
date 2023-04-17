import { useAuthContext } from '@/context/ContextProvider'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  const {user,logout}=useAuthContext()
  const router=useRouter()
  return (
    <div className='sticky top-0 w-full flex justify-center test-xl p-5'>
      <h1>Todo's List in Typescript</h1>
      {user? (
      <button className='ml-auto border border-white p-1 bg-transparent hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out rounded' onClick={(e:any)=>{
          logout()
          router.push('/')
        }}>Logout</button>
      ):<> 
      </>}
    </div>

  )
}

export default Header
