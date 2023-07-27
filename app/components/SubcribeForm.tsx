'use client'
import React,{MouseEventHandler, useState} from 'react'
import {sanitize} from './utils/micelleneous'

interface SubcribeProps {
  status: string | TrustedHTML | Error |null;
  message: string | TrustedHTML | Error | null;
  onValidated: any;
}

const SubcribeForm: React.FC<SubcribeProps> = ({status,message,onValidated}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
    /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */ 
    const handleFormSubmit:Function = (event:any) => {
      
      event.preventDefault()
      setError('');
  
      if ( ! email ) {
        console.log(email)
        setError( 'Please enter a valid email address' );
        return null;
      }
  
      const isFormValidated = onValidated({ EMAIL: email });
      setEmail('')
  
      // On success return true
      return email && email!.indexOf("@") > -1 && isFormValidated;
    }
  
    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = ( event:any ) => {
      setError("");
      // Number 13 is the "Enter" key on the keyboard
      if (event?.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        handleFormSubmit(event);
      }
    }
  
    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message:string) => {
      if ( !message ) {
        return null;
      }
      const result = message?.split('-') ?? null;
      if ( "0" !== result?.[0]?.trim() ) {
        return sanitize(message);
      }
      const formattedMessage = result?.[1]?.trim() ?? null;
      return formattedMessage ? sanitize( formattedMessage ) : null;
    }

    const checkMarkup = () => {
      if(error){
        return {__html: error as string}
      }
      else {
        return {__html: getMessage(message as string)}
      }
    }
    
  return (
    <div>
        <form className='flex space-x-5' action="">
            <input 
            onChange={(e) => {setEmail(e?.target?.value ?? '')}}
            className='border border-purple-300 rounded-md p-2 md:p-3' 
            type="email" 
            name="" 
            placeholder='Janedoe@gmail.com' 
            id="email" 
            onKeyUp={(event) =>  {handleInputKeyEvent(event)}}/>
            <button onClick={() => {handleFormSubmit}} className='p-2 md:p-3 rounded-sm bg-purple-500 text-white font-semibold hover:bg-purple-600 
            whitespace-nowrap text-sm md:text-base'>Sign Up</button>
        </form>
        <div className="min-h-42px">
        { 'sending' === status ? message+'loading' : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: {checkMarkup} }}
          />
        ) : null }
        {'success' === status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message as string) }} />
        )}
      </div>
    </div>
  )
}

export default SubcribeForm