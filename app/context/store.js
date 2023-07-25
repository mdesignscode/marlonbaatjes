'use client';
import { useEffect, useMemo, useState } from 'react';

export function useTextToSpeech () {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [voices, setVoices] = useState([]);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  const femaleVoice = useMemo(() => {
    let femaleVoice;
    for (const voice of voices) {
      if (voice.name === 'English (America)+female5') {
        femaleVoice = voice;
        break;
      }
    }
    return femaleVoice;
  }, [voices]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      if (femaleVoice) speech.voice = femaleVoice;
      speech.text = textToSpeak;
      window.speechSynthesis.speak(speech);
      setVoicesLoaded(true)
    } else {
      ;
    }
  }, [textToSpeak, femaleVoice]);

  return [setTextToSpeak, voicesLoaded];
}
