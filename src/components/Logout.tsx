import React from 'react'
import httpClient from '../httpClient'

const baseUrl = "//"+process.env.REACT_APP_API_BASE_URL+"/api";


const Logout: React.FC = () => {
    
    const logOutUser = async () => {
        await httpClient.post(`${baseUrl}/logout`);
        window.location.href = "http://localhost:3000/"
    }

  return (
    <div>
      <button onClick={logOutUser}>Logout</button>
    </div>
  )
}

export default Logout
