import { Box } from 'rebass';
import '../oweek.css';

const Contact = () => {
    const coordinators = [
        {
            name: "Cara Brown",
            email: "cb116@rice.edu",
            phone: "(480) 341-9841"
        },
        {
            name: "Carlos Cruz",
            email: "cc211@rice.edu",
            phone: "(832) 878-1009"
        },
        {
            name: "Yazmine Miles",
            email: "yam1@rice.edu",
            phone: "(928) 304-4418"
        }
    ];

    return (
        <div className='oweek-page'>
            <div className='oweek-hero'>
                <h1 className='oweek-main-title'>Contact Information</h1>
            </div>

            {/* Mailing Address Section */}
            <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[3, 3]} mt={[0, 0]}>
                <h2 className='section-title'>📮 Your McMurtry Mailing Address</h2>
                <div className='contact-card'>
                    <div className='contact-address-box'>
                        <p className='contact-address-line'><strong>(Your name here)</strong></p>
                        <p className='contact-address-line'>McMurtry College</p>
                        <p className='contact-address-line'>1605 Rice Blvd.</p>
                        <p className='contact-address-line'>Houston, TX 77005</p>
                    </div>
                    <div className='contact-note'>
                        <p><strong>⚠️ Important:</strong> You can only mail or ship things to arrive <strong>after August 14th</strong>. Our space is limited and not secure, so please bring important items with you. There will be plenty of time to purchase other personal items during and after O-Week.</p>
                    </div>
                </div>
            </Box>

            {/* O-Week Coordinators Section */}
            <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[3, 3]}>
                <h2 className='section-title'>🎓 O-Week Coordinators</h2>
                <div className='contact-card' style={{ marginBottom: '1.5rem' }}>
                    <p className='contact-label'>General Email</p>
                    <a href='mailto:mcmurtryoweek@gmail.com' className='contact-email-link'>mcmurtryoweek@gmail.com</a>
                </div>
                <div className='contact-grid'>
                    {coordinators.map((coord, index) => (
                        <div key={index} className='contact-person-card'>
                            <h3 className='contact-person-name'>{coord.name}</h3>
                            <div className='contact-person-details'>
                                <div className='contact-detail-item'>
                                    <span className='contact-icon'>📧</span>
                                    <a href={`mailto:${coord.email}`} className='contact-link'>{coord.email}</a>
                                </div>
                                <div className='contact-detail-item'>
                                    <span className='contact-icon'>📱</span>
                                    <a href={`tel:${coord.phone.replace(/[^0-9]/g, '')}`} className='contact-link'>{coord.phone}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Box>

            {/* College Leadership Section */}
            <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[4, 5]}>
                <h2 className='section-title'>👥 College Leadership</h2>
                
                <div className='contact-person-card' style={{ marginBottom: '1.5rem' }}>
                    <div className='contact-role-badge'>College President</div>
                    <h3 className='contact-person-name'>Berny Guerra Arthur</h3>
                    <div className='contact-person-details'>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>📧</span>
                            <a href='mailto:mcmurtrypresident@gmail.com' className='contact-link'>mcmurtrypresident@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className='contact-person-card' style={{ marginBottom: '1.5rem' }}>
                    <div className='contact-role-badge'>College Coordinator</div>
                    <h3 className='contact-person-name'>Jackie Carrizales</h3>
                    <div className='contact-person-details'>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>📧</span>
                            <a href='mailto:jjc3@rice.edu' className='contact-link'>jjc3@rice.edu</a>
                        </div>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>📞</span>
                            <span className='contact-link'>Office: (713) 348-4583</span>
                        </div>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>📠</span>
                            <span className='contact-link'>Fax: (713) 348-3135</span>
                        </div>
                    </div>
                </div>

                <div className='contact-person-card'>
                    <div className='contact-role-badge'>Magisters</div>
                    <h3 className='contact-person-name'>Elizabeth Vann & Jeffery Fleisher</h3>
                    <div className='contact-person-details'>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>✉️</span>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <a href='mailto:evann@rice.edu' className='contact-link'>evann@rice.edu</a>
                                <span className='contact-link'>|</span>
                                <a href='mailto:jfleisher@rice.edu' className='contact-link'>jfleisher@rice.edu</a>
                            </div>
                        </div>
                        <div className='contact-detail-item'>
                            <span className='contact-icon'>📞</span>
                            <span className='contact-link'>(713) 348-4908</span>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default Contact;