import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../general/title';
import './expenseforms.css'

// import pettyCash from '../../../../static/reimbursements/PettyCashVoucher.pdf';
// import pettyCashTemplate from '../../../../static/reimbursements/PettyCashVoucherTemplate.pdf';
// import entertainmentExpense from '../../../../static/reimbursements/EntertainmentExpenses.pdf';
// import entertainmentExpenseTemplate from '../../../../static/reimbursements/EntertainmentExpensesTemplate.pdf';


const forms = [
    {
        name: "Petty Cash Voucher",
        document: '../../../../static/reimbursements/PettyCashVoucher.pdf',
        icon: "https://icon.now.sh/attach_money"
    },
    {
        name: "Petty Cash Voucher Template",
        document: '../../../../static/reimbursements/PettyCashVoucherTemplate.pdf',
        icon: "https://icon.now.sh/description"
    },
    {
        name: "Entertainment Expense Form",
        document: '../../../../static/reimbursements/EntertainmentExpenses.pdf',
        icon: "https://icon.now.sh/attach_money"
    },
    {
        name: "Entertainment Expense Form Template",
        document: '../../../../static/reimbursements/EntertainmentExpensesTemplate.pdf',
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
                        <li className='instructions-list-item'>Take a picture of your receipts and fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLScudpfQhAaGSpMu4t9Me4o_Zu767Jmqy1bG2CaXgjhpPwQ7Ag/viewform">
                            McMurtry Expenditure Form</a>, which asks a few basic questions about what your purchase was for. If your purchase was made with a PCard, you're done!</li>
                        <li className='instructions-list-item'>Fill out the <strong>Petty Cash Voucher Form</strong>, following the template provided.</li>
                        <li className='instructions-list-item'>Fill out the <strong>Business Meeting/Entertainment Expenses Form</strong>, following the template provided.</li>
                        <li className='instructions-list-item'>Get Jackie or one of the treasurers to sign the forms.</li>
                        <li className='instructions-list-item'>Submit the receipts and forms to the registrar.</li>
                    </ol>
                    <h2 className='instructions-title'>Account Codes</h2>
                    <ul>
                        <li className='instructions-list-item'>If you bought ANY alcohol, you must use code: 70880</li>
                        <li className='instructions-list-item'>Otherwise, any other purchases are under: 70877</li>
                    </ul>

                    <h2 className='instructions-title'>PCard Requests</h2>
                    <ul>
                        <li className='instructions-list-item'>Request to use either of the Treasurers' PCards by using the <a href="https://forms.gle/c6LqRP6A3DB56mBu8">PCard Check-Out Form</a></li>
                        <li className='instructions-list-item'>You will be texted an access code, which can be used on the padlock right outside of the door on the 5D suite. Text (505)-412-1841 if you have any questions 
                            on where this padlock is located. Once you open the padlock, take ONE PCard and ONE Tax Exempt card from the padlock and re-close the padlock. </li>
                        <li className='instructions-list-item'>Once you complete your purchase using the PCard, make sure to complete the McMurtry Expenditure form below and KEEP YOUR RECEIPT.</li>
                        <li className='instructions-list-item'>Once the Mcmurtry Expenditure form is completed, complete the <a href="https://forms.gle/6f7BRW4yiYov3SABA">
                            PCard Return Form</a> to get another code to put the PCard, Tax Exempt card and the solid receipt back in the padlock. Lock the padlock back up and you're done!</li>
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
                    <iframe src={forms[this.state.slide].document} type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
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