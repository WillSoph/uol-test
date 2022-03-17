import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewCustomerModal } from './components/NewCustomerModal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {

  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

  function handleOpenNewCustomerModal() {
    setIsNewCustomerModalOpen(true)
  }

  function handleCloseNewCustomerModal() {
    localStorage.clear()
    setIsNewCustomerModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewCustomerModal={handleOpenNewCustomerModal} />
      <Dashboard />
      <NewCustomerModal
        isOpen={isNewCustomerModalOpen}
        onRequestClose={handleCloseNewCustomerModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
