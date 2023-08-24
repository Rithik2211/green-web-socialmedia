import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import '../index.css';

const NftStore = () => {
    
    const nftImages = [
        '../NFT-1.jpg',
        '../NFT-2.jpg',
        '../NFT-3.jpg',
        '../NFT-4.jpg',
        '../NFT-5.jpg',
        '../NFT-6.jpg',
        '../NFT-7.jpg',
        '../NFT-8.jpg',
        '../NFT-9.jpg',
    ];

    return (
        <div className='nftStore'>
            <h1 style={{fontSize:"2rem", color:"white"}}>NFT STORE PAGE!</h1>
            <Button margin="1rem" _hover={{ backgroundColor: "#33ccff" }}><Link to='/Post'>Go To Home</Link></Button>
            <div className='nftGrid'>
                {nftImages.map((src, index) => (
                    <img key={index} src={src} alt={`NFT ${index + 1}`} className='nftImage' />
                ))}
            </div>
        </div>
    )
}

export default NftStore;
