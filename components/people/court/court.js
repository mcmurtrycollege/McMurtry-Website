import React from 'react';
import Title from '../../general/title';
import Cards from '../../general/contactcards';
import './court.css';
import { justices } from './court.json';

export default class Court extends React.Component {
    render(){
        return (
            <div className='court-page'>
                <Title width={150} title="Court" />
                <Cards content={justices} height={180} width={260} />
            </div>
        )
    }
}