import React from 'react';
import { Flex } from 'rebass';
import Title from '../../general/title';
import './documents.css'

// import mcm_constitution from '../../../../static/documents/mcm_constitution.pdf';
// import mcm_bylaws from '../../../../static/documents/mcm_bylaws.pdf';
// import mcm_housing_bylaws from '../../../../static/documents/mcm_housing_bylaws.pdf';
// import mcm_parking_bylaws from '../../../../static/documents/mcm_parking_bylaws.pdf';

const documents = [
    {
        name: "Constitution",
        document: '../../../../static/documents/mcm_constitution_jan_2024.pdf',
        icon: "https://icon.now.sh/account_balance"
    },
    {
        name: "General By-Laws",
        document: '../../../../static/documents/mcm_general_bylaws_jan_2024.pdf',
        icon: "https://icon.now.sh/import_contacts"
    },
    {
        name: "Housing By-Laws",
        document: '../../../../static/documents/mcm_housing_bylaws_jan_2024.pdf',
        icon: "https://icon.now.sh/home"
    },
    {
        name: "Parking By-Laws",
        document: '../../../../static/documents/mcm_parking_bylaws.pdf',
        icon: "https://icon.now.sh/directions_car"
    },
]

class Documents extends React.Component {
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
            <div className='documents-page'>
                <Title title='McLegislation' width={350} smallText={true} />
                <Flex flexDirection='row' justifyContent='center'>
                    {
                        documents.map(document => (
                            <div onClick={() => this.handleClick(documents.indexOf(document))}
                                className={documents.indexOf(document) === this.state.slide ? ('active-doc') : ('inactive-doc')} key={document.name}>
                                <p className='doc-key'>{document.name}</p>
                            </div>
                        ))
                    }
                </Flex>
                <div className='embedded-doc'>
                    <iframe src={documents[this.state.slide].document} type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
                </div>
                <div className='doc-link-container'>
                    <a href={documents[this.state.slide].document} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div className='doc-link'>
                            <img src={`${documents[this.state.slide].icon}/2B2F3A/90`} alt='' />
                            <p>{documents[this.state.slide].name} <img src="https://icon.now.sh/open_in_new/2B2F3A/13" alt='' /></p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Documents;