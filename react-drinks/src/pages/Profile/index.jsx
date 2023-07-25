import { useEffect} from "react"
import useAuth from "../../hooks/authProvider";


export const Profile = () => {
  const { userProfile,getProfile } = useAuth()
  
  


  useEffect(() => {
    
   getProfile()

  }, []);
  return (

    userProfile && (
      <div style={{
        color: "white",
        textShadow: "2px 2px 4px black"
      }}>
        <h2>{userProfile.name}</h2>
        <hr />
        <h3>{userProfile.email}</h3>
      </div>
    )


  )
}
