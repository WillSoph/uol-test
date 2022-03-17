import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import api from '../../services/api'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import waitingImg from '../../assets/time.png'
import inativeImg from '../../assets/arrowright.png'

import { Container, CustomerTypeContainer, RadioBox } from './styles'

export function NewCustomerModal({ isOpen, onRequestClose }) {

    const locale = localStorage.getItem("localName")

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState("");

    useEffect(() => {
        setName(localStorage.getItem("localName"))
        setEmail(localStorage.getItem("localEmail"))
        setId(localStorage.getItem("localId"))
        setPhone(localStorage.getItem("localPhone"))
    }, [locale])

    const body = {
        'id': id,
        'name': name,
        'email': email,
        'phone': phone,
        'status': status
    }

    function sendForm() {
        const URL = `/customers.json`
        api
            .put(URL, body)
            .then(() => {
                alert('Usuário editado com sucesso!')
            })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => { localStorage.clear(); onRequestClose(); }}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={() => { localStorage.clear(); onRequestClose(); }}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <input
                    type="string"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input
                    type="string"
                    placeholder="CPF"
                    value={id}
                    onChange={event => setId(event.target.value)}
                />

                <input
                    placeholder="Telefone"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />

                <CustomerTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setStatus('ativo') }}
                        isActive={status === 'ativo'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Ativo" />
                        <span>Ativo</span>

                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setStatus('inativo') }}
                        isActive={status === 'inativo'}
                        activeColor="red"
                    >
                        <img src={inativeImg} alt="Inativo" />
                        <span>Inativo</span>

                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setStatus('aguardando') }}
                        isActive={status === 'aguardando'}
                        activeColor="yellow"
                    >
                        <img src={waitingImg} alt="Aguardando ativação" />
                        <span>Aguardando ativação</span>

                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setStatus('desativado') }}
                        isActive={status === 'desativado'}
                        activeColor="grey"
                    >
                        <img src={outcomeImg} alt="Desativado" />
                        <span>Desativado</span>

                    </RadioBox>
                </CustomerTypeContainer>

                <button
                    type="submit"
                    onClick={() => sendForm()}
                >
                    Cadastrar
                </button>
            </Container>

        </Modal>
    )
}