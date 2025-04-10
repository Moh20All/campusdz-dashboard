import React, { useState, useEffect, useRef } from 'react';

interface SponsorBannerProps {
  onClose: () => void;
}

const SponsorBanner: React.FC<SponsorBannerProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  
  // Countdown effect with progress bar
  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const intervalStep = 100; // Update every 100ms
    let elapsed = 0;
    
    progressInterval.current = setInterval(() => {
      elapsed += intervalStep;
      const remaining = Math.max(0, 100 - (elapsed / totalDuration) * 100);
      setProgress(remaining);
      
      if (elapsed >= totalDuration) {
        clearInterval(progressInterval.current as NodeJS.Timeout);
        setVisible(false);
        onClose();
      }
    }, intervalStep);
    
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [onClose]);

  // Handle manual closing
  const handleClose = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
        border: 'none',
        borderRadius: '12px',
        padding: '0',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.08)',
        zIndex: 1000,
        maxWidth: '420px',
        overflow: 'hidden',
        animation: 'floatIn 0.6s ease-out forwards'
      }}
    >
      {/* Progress bar */}
      <div 
        style={{
          height: '4px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)',
          transition: 'width 0.1s linear'
        }}
      />
      
      {/* Banner header with decorative element */}
      <div 
        style={{
          height: '8px',
          background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #c026d3)',
          marginBottom: '0'
        }}
      />
      
      <div style={{ padding: '20px 24px' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '16px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21L16 11L22 7L12 3L2 7L8 11L12 21Z" fill="white" />
              </svg>
            </div>
            <h3 style={{ 
              margin: 0, 
              color: '#1f2937', 
              fontSize: '18px',
              fontWeight: '700'
            }}>
              Sponsored by CampusDZ
            </h3>
          </div>
          <button 
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '22px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ×
          </button>
        </div>
        
        {/* Content */}
        <div style={{ padding: '0 0 16px 0', borderBottom: '1px solid #e5e7eb' }}>
          <p style={{ 
            margin: '0 0 16px 0', 
            fontSize: '15px',
            lineHeight: '1.5',
            color: '#4b5563' 
          }}>
            CampusDZ provides innovative solutions for university management across Algeria.
            Our platform helps connect students, professors, and administrative staff.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '10px',
            alignItems: 'center',
            fontSize: '14px',
            color: '#6b7280' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Trusted by 15+ universities</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>50,000+ users</span>
            </div>
          </div>
        </div>
        
        {/* Footer with CTA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button
            onClick={() => window.open('https://example.com/campusdz', '_blank')}
            style={{
              background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
              transition: 'transform 0.1s, box-shadow 0.1s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)';
            }}
          >
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <style>
        {`
          @keyframes floatIn {
            0% { transform: translateY(30px); opacity: 0; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
            100% { transform: translateY(0); opacity: 1; box-shadow: 0 10px 25px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.08); }
          }
        `}
      </style>
    </div>
  );
};

export default SponsorBanner; 