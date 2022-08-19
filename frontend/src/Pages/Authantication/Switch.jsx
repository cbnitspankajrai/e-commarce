import React,{useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Switch() {
    const [Signin,setSignin]=useState(true);

return (<>
  {
    Signin?<SignIn setSignin={setSignin}/>:<SignUp setSignin={setSignin}/>

  }

  </>
  )
}
