import {useState, useEffect} from 'react';
// import { APIURL, LENS_HUB_CONTRACT_ADDRESS, queryRecommendedProfiles, queryExplorerPublications, urlClient } from './queries';
import LENSHUB from './lensHub.json';
import { ethers } from 'ethers';
import Button from '@mui/material/Button';

function App() {
  const [account, setAccount] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [posts, setPosts] = useState([]);

  async function signIn(){
    const accounts = await window.ethereum.request({
      method : "eth_requestAccounts"
    });
    setAccount(accounts[0]);
  }

  // async function getRecommendedProfiles(){
  //   const response = await urlClient.query(queryRecommendedProfiles).toPromise();
  //   const profile = response.data.recommendedProfiles.slice(0,5);
  //   setProfiles(profile);
  // }

  // async function getPost(){
  //   const response = await urlClient.query(queryExplorerPublications).toPromise();
  //   const post = response.data.explorePublications.items.filter(post => post.profile);
  //   setPosts(post);
  // }

  // async function follow(id){
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const contract = new ethers.Contract(
  //     LENS_HUB_CONTRACT_ADDRESS,
  //     LENSHUB,
  //     provider.getSigner()
  //   );
  //   const tx = await contract.follow([parseInt(id)],[0x0]);
  //     await tx.wait();
  // }

  // useEffect(() => {
  //   getRecommendedProfiles();
  //   getPost();
  // },[]);
     

  return (
    <div className="app" style={{width:'100%'}}>
      <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',width:'55%',marginLeft:'25rem',padding:'5px 0',color:'white'}}>
          <div style={{fontSize:'20px'}}>
            <h2 >GREEN WEB</h2>
            <h4 >A Decentralized SocialMedia</h4>
          </div>
          {
            account ? 
            <Button variant="contained" color="success"> Connected </Button> : 
            <Button variant="contained" onClick={signIn} >Connect Wallet</Button>
          }
      </div>
    </div>
  );
}

export default App;
