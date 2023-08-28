import os from 'os'
import Counter from "@/components/Counter";
import Image from 'next/image'



export default function Home() {
  return (
    <>
      <h1>메인입니다</h1>
      <Counter />
      <Image src={ "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
             alt={'shop'}
             width={400}
             height={400}
      />
    </>

  )
}
