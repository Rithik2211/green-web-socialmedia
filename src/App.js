import {useState, useEffect} from 'react';
import { APIURL, LENS_HUB_CONTRACT_ADDRESS, queryRecommendedProfiles, queryExplorerPublications } from './queries';
import LENSHUB from './lensHub.json';
import { ethers } from 'ethers';
import {Box, Button, Image} from '@chakra-ui/react';

function App() {
  const [account, setAccount] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [posts, setPosts] = useState([]);
  return (
    <div className="app">
       Hello Green Web User !!
    </div>
  );
}

export default App;
