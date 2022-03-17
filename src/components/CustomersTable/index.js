// import { useCount } from '../../hooks/useCustomers'
import React, { useState, useEffect } from 'react'
import { Container } from "./styles";
import api from '../../services/api'

export function CustomersTable({ onOpenNewCustomerModal }) {

    useEffect(() => {
        const URL = `/customers.json`
        api
            .get(URL)
            .then(response => {
                setItems(response.data.customers)
            })
    }, [])

    const [items, setItems] = useState([])

    function functionLocale(item) {

        localStorage.setItem("localName", item.name)
        localStorage.setItem("localId", item.id)
        localStorage.setItem("localEmail", item.email)
        localStorage.setItem("localPhone", item.phone)
        localStorage.setItem("localStatus", item.status)
    }

    return (
        <Container>
            <div>
                <table>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>
                                    {item.name}<br />
                                    {item.email}
                                </td>
                                <td>
                                    {item.id}<br />
                                    {item.phone}
                                </td>
                                <td className={item.status}>
                                    {item.status}
                                </td>
                                <td>
                                    <button type="button" onClick={() => { functionLocale(item); onOpenNewCustomerModal(); }}>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </Container>
    )
}
