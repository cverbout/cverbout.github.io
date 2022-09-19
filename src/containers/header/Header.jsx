import React, {useState} from 'react';
import "./header.css";
import { useTimer } from 'react-timer-hook';
import chase_sitting from '../../assets/chase_sitting_cropped.png';
import chase_cropped from '../../assets/chase_cropped.png';
import { Icon } from '@iconify/react';


const Header = () => {

  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 3);
 
  const [message, setMessage] = useState('');
  const [tMessage, tSetMessage] = useState('');
 

  const handleChange = event => {
    setMessage(event.target.value);
    tSetMessage(event.target.value);
  };
  


  const handleClick = () => {
    // 👇️ clear input value
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3);
    if (isRunning) {
        
    } else{
      start();
    }
    
   
    setMessage('');
    console.log(seconds);
  };

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => restart(expiryTimestamp, false), autoStart: false});
  // console.warn('onExpire called')

  return (
    <div className='mw__header'>
      <div className='mw__header-text-content'>
        <h1 className='gradient__text'>Hey I'm Chase V</h1>
        <h3 className='gradient__text'>Software Engineer</h3>
        <p>V like in Versatile, V the first letter of Voracious, V as in the smartest dinosaur Velociraptor, but mostly V, for Verbout </p>
        <div className='mw__header-message_container'> 
          <input 
            id="message"
            name="message"
            type="text"
            onChange={handleChange}
            value={message} 
            placeholder={"Send something out into the void"}>
          </input>
          {isRunning && (
            <div className='launcher'>
              <div className='rocket'>{tMessage}</div>
            </div>
          )}
          
          <button onClick={handleClick}>Blast Off</button>
        </div>
        <h5>
        <a href="https://www.freepik.com/free-vector/magic-portal-stone-frame-desert-landscape-night_12900156.htm#query=magic%20portal&position=32&from_view=keyword">*Thank you to upklyak for this awesome background*</a>
        </h5>
      </div> 
    </div>
  )
}


export default Header