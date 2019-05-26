import React from 'react';
import Title from '../../../title';
import './tax-exempt-form.css';

import taxExempt from '../../../../static/tax_exempt_form.pdf'

const TaxExempt = () => (
    <div className='tax-exempt-page'>
        <Title width={330} title="Tax Exempt Form" />
        <div className='wide-tax-exempt-pdf'>
            <embed src={taxExempt} type="application/pdf" width="600" height="820px" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-tax-exempt-pdf'>
            <embed src={taxExempt} type="application/pdf" width="360" height="820px" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default TaxExempt;