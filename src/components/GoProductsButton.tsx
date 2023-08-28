'use client'

import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter()
  return (
    <>
      <button
        className={'btn btn-primary'}
        onClick={()=>{
        router.push('/products')
      }}>
        제품페이지로 이동
      </button>
    </>
  )
}
