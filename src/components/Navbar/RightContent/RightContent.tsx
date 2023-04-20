import { Flex } from '@chakra-ui/react';
import { signOut, User } from "firebase/auth";
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';

type RightContentProps = {
    user?: User || null;
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (<>
    <AuthModal />
    <Flex justify='center' align='center'>
        <AuthButtons />
        {/* <Menu /> */}
    </Flex>
    </>)
}
export default RightContent;