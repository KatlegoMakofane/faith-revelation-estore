import React,{useState} from 'react'
import styled from 'styled-components';
import Tabs from '../../components/Tabs/Tabs';
import BannerComp from '../../components/banner/Banner';
import Footer from '../../components/Footer/Footer';
import {  logout,  useAuth } from '../../components/config/Firebase';

const Landingpage = () => {
  const currentUser = useAuth()
	const[loading, setLoading] = useState(false)
  
	async function handleLogOut(){
	  setLoading(true)
	  try{
		await logout()
	  }catch{
		alert("Error")
	  }
	  setLoading(false)
	}

  return (
    
   <>
   
  
    <Container>
    <div className='fix'>
    <Banner>
        <BannerComp/>
    </Banner>
    </div>
    <div>Current loged in user: {currentUser?.email}</div>
    <button disabled={loading || !currentUser}onClick={handleLogOut}>Sign out</button>
    <Tabs/>

    <Footer/>
</Container>
</>
  )
}

export default Landingpage;

const Container = styled.div`

`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  
`