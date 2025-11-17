import { useState, useEffect } from 'react';
import './VoiceCommand.css';

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase().trim();
        setTranscript(command);
        handleVoiceCommand(command);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceCommand = (command) => {
    const sectionMap = {
      'home': '#hero',
      'hero': '#hero',
      'about': '#about',
      'projects': '#projects',
      'project': '#projects',
      'skills': '#skills',
      'skill': '#skills',
      'contact': '#contact',
      'tech stack': '#skills',
      'get in touch': '#contact',
    };

    // Find matching section
    for (const [key, selector] of Object.entries(sectionMap)) {
      if (command.includes(key)) {
        const element = document.querySelector(selector);
        if (element) {
          // Get the element's offset from top
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          
          // Use native smooth scroll which works with Lenis
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          
          setTranscript(`Navigating to ${key}...`);
          setTimeout(() => setTranscript(''), 2000);
        }
        break;
      }
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setTranscript('Listening...');
      recognition.start();
      setIsListening(true);
    }
  };

  if (!recognition) {
    return null; // Don't render if not supported
  }

  return (
    <div className="voice-command">
      <button 
        className={`voice-button ${isListening ? 'listening' : ''}`}
        onClick={toggleListening}
        title="Voice Commands: home, about, projects, skills, contact"
      >
        <i className={`fas fa-microphone${isListening ? '' : '-slash'}`}></i>
      </button>
      {transcript && (
        <div className="voice-transcript">
          {transcript}
        </div>
      )}
    </div>
  );
};

export default VoiceCommand;
