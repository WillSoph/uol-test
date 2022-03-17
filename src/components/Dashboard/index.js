import { useState } from 'react';
import { Summary } from "../Summary";
import { CustomersTitle } from "../CustomersTitle";
import { CustomersTable } from "../CustomersTable";
import { Container } from "./styles";
import { NewCustomerModal } from '../NewCustomerModal';


export function Dashboard() {
    const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

    function handleOpenNewCustomerModal() {
        setIsNewCustomerModalOpen(true)
    }

    function handleCloseNewCustomerModal() {
        setIsNewCustomerModalOpen(false)
    }
    return (
        <Container>
            <Summary />
            <NewCustomerModal
                isOpen={isNewCustomerModalOpen}
                onRequestClose={handleCloseNewCustomerModal}
            />
            <CustomersTitle onOpenNewCustomerModal={handleOpenNewCustomerModal} />
            <CustomersTable onOpenNewCustomerModal={handleOpenNewCustomerModal} />
        </Container>
    )
}