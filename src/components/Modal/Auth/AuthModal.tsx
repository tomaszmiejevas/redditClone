import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';



const AuthModal:React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState);
    
    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    return (
        <>
        <Modal isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {modalState.view === "login" && "Login"}
                    {modalState.view === "signup" && "Sign Up"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Flex direction='column' align='center' justify='center' width='70%' border="1px solid red">
                        {/* <OAuthButton />*/
                        <AuthInputs />
                        /*<ResetPassword /> */}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}
export default AuthModal;