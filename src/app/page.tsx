"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "@/store/userSlice"
import { RootState } from "@/store"

export default function Home() {
  const res=useSelector((state:RootState)=>state.user.response)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({
      email: state.email, password: state.password}))

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange} value={state.email} /> login <br />
        <input type="password" name="password" onChange={handleChange} value={state.password} /> password <br/>
        <button></button>
      </form>
      {res.message && <p>{res.message}</p>}
    </main>
  )
}
