'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect, Key } from 'react';
type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;
const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  useEffect(() => {
    const fatchProvider = async ()=>{
      const res = await getProviders()
      console.log(res)
      setProviders(res);
    }
    fatchProvider();
  },[])

  if(providers){
    return <>
      {Object.values(providers).map((provider:Provider,i)=>(
        <button key={i} onClick={()=>signIn(provider.id)} >{provider.name}</button>
      ))}
    </>
  }
  return(
    <>
      'Hello'
    </>
  )
}

export default AuthProviders