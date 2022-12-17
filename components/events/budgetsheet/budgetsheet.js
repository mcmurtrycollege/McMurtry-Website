import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './budgetsheet.css';

export default class BudgetSheet extends React.Component {
    render() {
        return (
            <div className='budget-sheet-page'>
                <Title width={400} title="Spring Budget Sheet" />
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/spreadsheets/d/1fms3QPytS6SwAQ6_BN9YRVsvFbd_UiKRLAbQk-QfGSg/edit?usp=sharing">Link to the McMurtry Spring 2023 Budget Sheet</a></p>
                </Box>
            </div>
        )
    }
}