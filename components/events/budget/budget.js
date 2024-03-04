import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './budget.css';

export default class Budget extends React.Component {
    render() {
        return (
            <div className='budget-sheet-page'>
                <Title width={400} title="Spring Budget Sheet" />
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/spreadsheets/d/1fms3QPytS6SwAQ6_BN9YRVsvFbd_UiKRLAbQk-QfGSg/edit?usp=sharing">Link to the McMurtry Spring 2023 Budget Sheet</a></p>
                </Box>
                <Title width={400} title="McMurtry Expenditure Form" />
                <Box width={[0.8, 0.25]} ml='auto' mr='auto'>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScudpfQhAaGSpMu4t9Me4o_Zu767Jmqy1bG2CaXgjhpPwQ7Ag/viewform">Link to the McMurtry Expenditure Form</a></p>
                </Box>
            </div>
        )
    }
}