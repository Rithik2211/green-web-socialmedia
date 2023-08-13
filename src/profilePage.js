import { Image, Drawer, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,useDisclosure} from "@chakra-ui/react";
function ProfilePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <Image alt="Green Web Symbol" src="/default-avatar.png" width="100px" height="100px" onClick={onOpen}/>
            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>WELCOME ROHITH !!</DrawerHeader>
                <DrawerBody>
                    <p>NFT TOKEN GENERATION</p>
                    <p>WALLET SETTINGS</p>
                    <p>GREEN WEB FAUCET</p>
                    <Button>DISCONNECT WALLET</Button>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </div>
    )
}

export default ProfilePage;