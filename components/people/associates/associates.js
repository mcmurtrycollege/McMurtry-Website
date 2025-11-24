import React, { useState, useEffect } from 'react';
import { Box, Image } from 'rebass';
import { associates } from './associates.json';

const AssociateModal = ({ associate, onClose }) => {
    if (!associate) return null;

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <div className="modal-image-side">
                    {associate.image ? (
                        <Image src={associate.image} className="modal-image" alt={associate.name} />
                    ) : (
                        <div className="modal-image-placeholder">
                            <span style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.2)' }}>
                                {associate.name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                <div className="modal-info-side">
                    <h2 className="modal-name">{associate.name}</h2>
                    <span className="modal-career">{associate.career}</span>

                    {associate.bio && (
                        <div className="modal-section">
                            <span className="modal-label">About</span>
                            <p className="modal-text">{associate.bio}</p>
                        </div>
                    )}

                    {associate.movie_tv && (
                        <div className="modal-section">
                            <span className="modal-label">Favorite Movie/TV</span>
                            <p className="modal-text">{associate.movie_tv}</p>
                        </div>
                    )}

                    {associate.hobbies && (
                        <div className="modal-section">
                            <span className="modal-label">Hobbies</span>
                            <p className="modal-text">{associate.hobbies}</p>
                        </div>
                    )}

                    {associate.fact && (
                        <div className="modal-section">
                            <span className="modal-label">Fun Fact</span>
                            <p className="modal-text">{associate.fact}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Associates = () => {
    const [selectedAssociate, setSelectedAssociate] = useState(null);

    return (
        <div className='associates-page'>
            <div className='associates-hero'>
                <h1 className='associates-main-title'>Associates</h1>
            </div>
            
            <Box width={[0.9, 0.55]} ml='auto' mr='auto'>
                <p className="associates-mission">
                    Every residential college at Rice has an associates program, where faculty, staff, 
                    and community members support students in their intellectual, cultural and social 
                    lives through providing mentorship, guidance and support.
                </p>
            </Box>

            <div className="associates-grid">
                {associates.map((associate, index) => (
                    <div 
                        key={index} 
                        className="associate-profile-card"
                        onClick={() => setSelectedAssociate(associate)}
                    >
                        <div className="profile-image-container">
                            {associate.image ? (
                                <Image src={associate.image} className="profile-image" alt={associate.name} />
                            ) : (
                                <div style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    background: 'rgba(139,111,199,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <span style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.3)' }}>?</span>
                                </div>
                            )}
                        </div>
                        <div className="profile-content">
                            <h3 className="profile-name">{associate.name}</h3>
                            <p className="profile-career">{associate.career}</p>
                            <span className="view-profile-btn">View Profile &rarr;</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedAssociate && (
                <AssociateModal 
                    associate={selectedAssociate} 
                    onClose={() => setSelectedAssociate(null)} 
                />
            )}
        </div>
    )
}

export default Associates;