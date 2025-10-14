import React from 'react';
import { Headphones, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #e9d5f5 0%, #f0e5f8 100%)',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        <button style={{
          backgroundColor: 'rgba(200, 150, 230, 0.4)',
          color: '#a855f7',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '25px',
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '1px',
          cursor: 'pointer',
          marginBottom: '40px',
          transition: 'all 0.3s ease'
        }}>
          CONTACT US
        </button>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '800',
          color: '#1f2937',
          margin: '0',
          marginBottom: '10px',
          letterSpacing: '-1px'
        }}>
          WorknAi Softech
        </h1>
        <h2 style={{
          fontSize: '64px',
          fontWeight: '800',
          color: '#1f2937',
          margin: '0',
          letterSpacing: '-1px'
        }}>
          Your Only Tech Upgrade Choice
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <Headphones size={48} color="#6366f1" strokeWidth={2} />
          </div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0',
            marginBottom: '20px'
          }}>
            Contact Phone Number
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '8px 0',
            lineHeight: '1.6'
          }}>
            +91 - 98904 46612
          </p>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '8px 0',
            lineHeight: '1.6'
          }}>
            020-29993974
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <Mail size={48} color="#6366f1" strokeWidth={2} />
          </div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0',
            marginBottom: '20px'
          }}>
            Our Email Address
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '8px 0',
            lineHeight: '1.6'
          }}>
            enquiry@newgensoftech.com
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <MapPin size={48} color="#6366f1" strokeWidth={2} />
          </div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0',
            marginBottom: '20px'
          }}>
            Head Office
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '8px 0',
            lineHeight: '1.6'
          }}>
            Office no 312, Sai Miliniam, opp Pune Mumbai road, Poonawale,Pune 411057
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div style={{
        maxWidth: '1400px',
        margin: '100px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Side - Image */}
        <div style={{
          position: 'relative'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #6366f1 100%)',
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" 
              alt="Student with phone"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'luminosity',
                opacity: '0.9'
              }}
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <div style={{
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            color: '#6366f1',
            display: 'inline-block',
            padding: '10px 24px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            marginBottom: '30px'
          }}>
            EDUCATION FOR EVERYONE
          </div>

          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            color: '#1f2937',
            margin: '0 0 40px 0',
            lineHeight: '1.2'
          }}>
            Get a free course today by reaching out to us - don't miss this opportunity!
          </h2>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <input
              type="text"
              placeholder="Name"
              style={{
                border: 'none',
                borderBottom: '2px solid #d1d5db',
                padding: '12px 0',
                fontSize: '16px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />

            <input
              type="email"
              placeholder="Email"
              style={{
                border: 'none',
                borderBottom: '2px solid #d1d5db',
                padding: '12px 0',
                fontSize: '16px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />

            <input
              type="tel"
              placeholder="Phone No"
              style={{
                border: 'none',
                borderBottom: '2px solid #d1d5db',
                padding: '12px 0',
                fontSize: '16px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              style={{
                border: 'none',
                borderBottom: '2px solid #d1d5db',
                padding: '12px 0',
                fontSize: '16px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />

            <textarea
              placeholder="Message"
              rows={4}
              style={{
                border: 'none',
                borderBottom: '2px solid #d1d5db',
                padding: '12px 0',
                fontSize: '16px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                outline: 'none',
                resize: 'vertical',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                transition: 'border-color 0.3s ease'
              }}
            />

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
              }}
            >
              GET IT NOW
              <span style={{ fontSize: '20px' }}>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;