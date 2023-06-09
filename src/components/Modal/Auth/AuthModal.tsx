import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';



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
                <ModalHeader textAlign="center">
                    {modalState.view === "login" && "Login"}
                    {modalState.view === "signup" && "Sign Up"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' pb={6}>
                    <Flex direction='column' align='center' justify='center' width='70%'>
                        <OAuthButtons />
                        <Text color="gray.500" fontWeight={700}>OR</Text>
                        <AuthInputs />
                        {/*<ResetPassword /> */}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}
export default AuthModal;