import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './budgetsheet.css';

export default class BudgetSheet extends React.Component {
    render() {
        return (
            <div className='budget-sheet-page'>
                <Title width={400} title="Fall Budget Sheet" />
                <Box width={[0.7, 0.21]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/spreadsheets/d/1AaKZA4lr3F9hOZFXsOOjkV898pSJUsHbZkT-lkaQZrI/edit?usp=sharing">Link to the McMurtry Fall 2022 Budget Sheet</a></p>
                </Box>
            </div>
        )
    }
}