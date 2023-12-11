import AuthLayout from "@/Layouts/AuthLayout"
import React from 'react'

const Printer = ({etiquetas}:any) => {
    console.log(etiquetas)
  return (
    <AuthLayout>{JSON.stringify(etiquetas)}</AuthLayout>
  )
}

export default Printer