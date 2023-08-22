import React from "react";
import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';

const NftStore = () => {
    return(
        <div>
            <h1>NFT STORE PAGE!</h1>
            <Button margin="1rem"><Link to='/Post'>Go To Home</Link></Button>
        </div>
    )
}
export default NftStore;