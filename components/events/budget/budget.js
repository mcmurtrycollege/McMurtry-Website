import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './budget.css';

export default class Budget extends React.Component {
    render() {
        return (
            <div className='budget-sheet-page'>
                <Title width={400} title="Expense Form" />
                <Title width={400} title="Budget Sheet and Expense Form" />
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing">Link to the most recent McMurtry Budget Sheet</a></p>
                </Box>
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4M9RPpgO0XhHrSFvcexGYXwu11w0F5LntvUEljN3AQI_Klg/viewform?usp=sf_link">Link to the McMurtry Expense Form</a></p>
                </Box>
            </div>
        )
    }
}