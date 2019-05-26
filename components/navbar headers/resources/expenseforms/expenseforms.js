import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../../title';
import './expenseforms.css'

import pettyCash from '../../../../static/reimbursements/PettyCashVoucher.pdf';
import pettyCashTemplate from '../../../../static/reimbursements/PettyCashVoucherTemplate.pdf';
import entertainmentExpense from '../../../../static/reimbursements/EntertainmentExpenses.pdf';
import entertainmentExpenseTemplate from '../../../../static/reimbursements/EntertainmentExpensesTemplate.pdf';


const forms = [
    {
        name: "Petty Cash Voucher",
        document: pettyCash,
        icon: "https://icon.now.sh/attach_money"
    },
    {
        name: "Petty Cash Voucher Template",
        document: pettyCashTemplate,
        icon: "https://icon.now.sh/description"
    },
    {
        name: "Entertainment Expense Form",
        document: entertainmentExpense,
        icon: "https://icon.now.sh/attach_money"
    },
    {
        name: "Entertainment Expense Form Template",
        document: entertainmentExpenseTemplate,
        icon: "https://icon.now.sh/description"
    }
]

class ExpenseForms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(idx) {
        this.setState({ slide: idx })
    }

    render() {
        return (
            <div className='reimbursements-page'>
                <Title title='Expense Forms' width={320} smallText={true} />
                <Box className='expense-instructions' ml='auto' mr='auto' width={[0.9, 0.7, 0.6, 0.55]}>
                    <h2 className='instructions-title'>Instructions</h2>
                    <ol>
                        <li className='instructions-list-item'>Take a picture of the receipts and send it to the treasurers. Be sure to include what it was for.</li>
                        <li className='instructions-list-item'>Fill out the <strong>Petty Cash Voucher Form</strong>, following the template provided.</li>
                        <li className='instructions-list-item'>Fill out the <strong>Business Meeting/Entertainment Expenses Form</strong>, following the template provided.</li>
                        <li className='instructions-list-item'>Get Jackie or one of the treasurers to sign the forms.</li>
                        <li className='instructions-list-item'>Submit the receipts and forms to the registrar</li>
                    </ol>
                    <h2 className='instructions-title'>Account Codes</h2>
                    <ul>
                        <li className='instructions-list-item'>If you bought ANY alcohol, you must use code: 70880</li>
                        <li className='instructions-list-item'>Otherwise, any other purchases are under: 70877</li>
                    </ul>
                </Box>
                <h1 className='instructions-title'>Forms</h1>
                <Flex flexDirection='row' justifyContent='center'>
                    {
                        forms.map(form => (
                            <div onClick={() => this.handleClick(forms.indexOf(form))}
                                className={forms.indexOf(form) === this.state.slide ? ('active-form') : ('inactive-form')} key={form.name}>
                                <p className='form-key'>{form.name}</p>
                            </div>
                        ))
                    }
                </Flex>
                <div className='embedded-form'>
                    <embed src={forms[this.state.slide].document} type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
                </div>
                <div className='form-link-container'>
                    <a href={forms[this.state.slide].document} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className='form-link'>
                            <img src={`${forms[this.state.slide].icon}/2B2F3A/90`} alt='' />
                            <p>{forms[this.state.slide].name} <img src="https://icon.now.sh/open_in_new/2B2F3A/13" alt='' /></p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default ExpenseForms;