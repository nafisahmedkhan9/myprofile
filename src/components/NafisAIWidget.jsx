import React, { useState, useRef, useEffect } from 'react';

/**
 * Nafis AI Agent Widget - Clean Chat Window Style
 * 
 * Looks like Facebook/LinkedIn chat - single clean window without card styling
 */

const NafisAIWidget = ({ 
  // Configuration props
  agentUrl = "https://nafis-ai-agent.onrender.com/iframe",
  // agentUrl="http://localhost:8000/iframe",
  width = "100%", 
  height = "600px",
  showToggle = true,
  position = "bottom-right", // "bottom-right", "bottom-left", "fixed", "inline"
  title = "Chat with Nafis",
  icon = "🤖",
  // welcomeMessage = "Hello! I'm an AI assistant representing Nafis Ahmed Khan. Feel free to ask me about his professional background, skills, experience, qualifications, or any career-related questions. How can I help you today?"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(1);
  const [showNotification, setShowNotification] = useState(true);
  const iframeRef = useRef(null);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Toggle widget visibility
  const toggleWidget = () => {
    console.log('🔄 Toggling widget. Current state:', isOpen, '→', !isOpen);
    setIsOpen(!isOpen);
    
    // Hide notification when user opens the chat
    if (!isOpen) {
      setShowNotification(false);
      setNotificationCount(0);
    }
  };

  // Build iframe URL with query parameters
  const getIframeUrl = () => {
    const url = new URL(agentUrl);
    
    // Add customization parameters
    if (title !== "Chat with Nafis's AI Assistant") {
      url.searchParams.set('title', title);
    }
    if (icon !== "🤖") {
      url.searchParams.set('icon', icon);
    }

    // if (welcomeMessage !== "Hello! I'm an AI assistant representing Nafis Ahmed Khan. Feel free to ask me about his professional background, skills, experience, qualifications, or any career-related questions. How can I help you today?") {
    //   url.searchParams.set('welcome', encodeURIComponent(welcomeMessage));
    // }
    
    console.log('🔗 Built iframe URL:', url.toString());
    return url.toString();
  };

  // Listen for close messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      console.log('🔔 Message received in React:', {
        data: event.data,
        origin: event.origin,
        source: event.source
      });
      
      if (event.data === 'closeChat') {
        console.log('✅ Closing chat window from iframe message');
        setIsOpen(false);
      }
    };

    console.log('📡 Setting up message listener in React component');
    window.addEventListener('message', handleMessage);
    
    // Cleanup event listener
    return () => {
      console.log('🧹 Cleaning up message listener');
      window.removeEventListener('message', handleMessage);
    };
   }, []);

   // Add notification cycling effect for more attraction
   useEffect(() => {
     if (!isOpen && showNotification) {
       const interval = setInterval(() => {
         setNotificationCount(prev => {
           // Cycle through 1, 2, 3, then back to 1
           return prev >= 3 ? 1 : prev + 1;
         });
       }, 4000); // Change every 4 seconds
       
       return () => clearInterval(interval);
     }
   }, [isOpen, showNotification]);

   // Seamless chat window styles (no card styling)
  const getPositionStyles = () => {
    const baseStyles = {
      zIndex: 1000,
      // Removed all background, borders, shadows for seamless look
    };

    switch (position) {
      case "bottom-right":
        return {
          ...baseStyles,
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: width,
          height: height,
          maxWidth: '400px',
          maxHeight: '600px',
        };
      case "bottom-left":
        return {
          ...baseStyles,
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: width,
          height: height,
          maxWidth: '400px',
          maxHeight: '600px',
        };
      case "fixed":
        return {
          ...baseStyles,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width,
          height: height,
          maxWidth: '90vw',
          maxHeight: '90vh',
        };
      default: // inline
        return {
          ...baseStyles,
          width: width,
          height: height,
        };
    }
  };

  // Toggle button styles (animated notification-style chat button)
  const toggleButtonStyles = {
    position: 'fixed',
    bottom: position.includes('bottom') ? '20px' : 'auto',
    right: position.includes('right') ? '20px' : 'auto',
    left: position.includes('left') ? '20px' : 'auto',
    top: position === 'fixed' ? '20px' : 'auto',
    backgroundColor: '#0084ff', // Facebook messenger blue
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(0, 132, 255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    zIndex: 1001,
    transition: 'all 0.3s ease',
  };

  // Notification badge styles
  const notificationBadgeStyles = {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    backgroundColor: '#ff4757',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    fontSize: '10px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    animation: 'badge-pulse 1.5s infinite',
  };

  // Add CSS animations via style tag for attractive notification button
  const animationStyles = `
    @keyframes pulse {
      0% { 
        box-shadow: 0 6px 20px rgba(0, 132, 255, 0.4);
        background-color: #0084ff;
      }
      50% { 
        box-shadow: 0 6px 35px rgba(0, 132, 255, 0.8);
        background-color: #0099ff;
      }
      100% { 
        box-shadow: 0 6px 20px rgba(0, 132, 255, 0.4);
        background-color: #0084ff;
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
      40% { transform: translateY(-10px) scale(1.05); }
      60% { transform: translateY(-5px) scale(1.02); }
    }
    
    @keyframes badge-pulse {
      0% { 
        transform: scale(1);
        background-color: #ff4757;
      }
      50% { 
        transform: scale(1.3);
        background-color: #ff6b7a;
      }
      100% { 
        transform: scale(1);
        background-color: #ff4757;
      }
    }
    
    @keyframes glow {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.2) drop-shadow(0 0 10px rgba(0, 132, 255, 0.7)); }
    }
    
    .chat-button {
      animation: pulse 2s infinite, bounce 4s infinite, glow 3s infinite !important;
    }
    
    .chat-button:hover {
      transform: scale(1.15) !important;
      box-shadow: 0 10px 30px rgba(0, 132, 255, 0.8) !important;
      animation-play-state: paused !important;
    }
  `;

  // Loading spinner styles
  const loadingStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#0084ff',
    fontSize: '14px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  // Widget container styles
  const widgetContainerStyles = {
    ...getPositionStyles(),
    display: showToggle ? (isOpen ? 'block' : 'none') : 'block',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    borderRadius: position === 'inline' ? '0' : '12px',
    boxShadow: position === 'inline' ? 'none' : '0 8px 32px rgba(0, 0, 0, 0.15)',
  };

  return (
    <>
      {/* Add CSS animations */}
      <style>
        {animationStyles}
      </style>

      {/* Animated Toggle Button with Notification (only shown when chat is closed) */}
      {showToggle && !isOpen && (
        <button
          onClick={toggleWidget}
          style={toggleButtonStyles}
          className="chat-button"
          title="💬 New message! Chat with Nafis's AI Assistant"
          aria-label="Open Chat - You have new messages"
        >
          {/* Dynamic Notification Badge */}
          {showNotification && notificationCount > 0 && (
            <div style={notificationBadgeStyles}>
              {notificationCount}
            </div>
          )}
          
          {/* Chat Icon */}
          💬
        </button>
      )}

      {/* Seamless Chat Window Container */}
      <div style={widgetContainerStyles}>
        {/* Loading Indicator */}
        {isLoading && (
          <div style={loadingStyles}>
            <div>Loading chat...</div>
          </div>
        )}

        {/* AI Agent Iframe - Seamless */}
        <iframe
          ref={iframeRef}
          src={getIframeUrl()}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: isLoading ? 'none' : 'block',
          }}
          onLoad={handleIframeLoad}
          title={title}
          allow="camera; microphone; geolocation"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
        />
      </div>
    </>
  );
};

export default NafisAIWidget;

// Usage Examples for Customizable Chat Window:

// 1. Custom floating chat with personalized title
// <NafisAIWidget 
//   agentUrl="http://localhost:8000/iframe"
//   position="bottom-right"
//   width="380px"
//   height="600px"
//   title="Ask About Nafis's Experience"
//   icon="💬"
//   welcomeMessage="Hi! Ask me anything about Nafis Ahmed Khan's professional experience!"
// />

// 2. Inline chat for portfolio section
// <NafisAIWidget 
//   agentUrl="http://localhost:8000/iframe"
//   position="inline"
//   showToggle={false}
//   width="100%"
//   height="500px"
//   title="Career Assistant"
//   icon="🚀"
//   welcomeMessage="Welcome! I can help you learn about Nafis's skills and background."
// />

// 3. Full-screen HR interview assistant
// <NafisAIWidget 
//   agentUrl="http://localhost:8000/iframe"
//   position="fixed"
//   width="700px"
//   height="800px"
//   title="Interview Assistant"
//   icon="👔"
//   welcomeMessage="Hello HR Team! I'm here to answer questions about Nafis Ahmed Khan's qualifications."
// />
