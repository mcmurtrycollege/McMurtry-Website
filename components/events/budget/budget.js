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
                    <p><a href="https://docs.google.com/spreadsheets/d/17f2MzrfQ9wlrDQBXBXbiBjCPLqaBW2iupWF5ocEx5T0/edit?usp=sharing">Link to the most recent McMurtry Budget Sheet</a></p>
                </Box>
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4LCmTDO2fXjyeM3H0dJ82IY1RdyasAqhGHl2Nuouqj0gAFg/viewform">Link to the McMurtry Expense Form</a></p>
                </Box>
            </div>
        )
    }
}