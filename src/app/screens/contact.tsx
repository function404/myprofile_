import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import RingLoader from 'react-spinners/RingLoader';

import { StyledTitle, StyledTitleH2 } from "^/app/components/title";
import { BorderTop, BorderBottom } from '^/app/globals';

import { 
   StyledCenter,
   StyledForm,
   StyledContent,
   StyledLabel,
   StyledInput,
   StyledTextArea,
   StyledButtonSubmit,
   StyledAlertError,
   StyledAlertSuccess
} from '^/styles/styledcontact';

interface TemplateProps {
   from_name: string
   message: string
   email: string
 }

export default function ContactUs() {
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);

   const form = useRef<HTMLFormElement>(null);


   const sendEmail = (e: FormEvent) => {
      e.preventDefault();

      if (form.current) {
         const formData = new FormData(form.current);
         const userName = formData.get('user_name') as string;
         const userEmail = formData.get('user_email') as string;
         const message = formData.get('message') as string;

         if (!userName || !userEmail || !message) {
            setError('Por favor, preencha todos os campos.');
            setSuccess(null);
            return;
         }

         setError(null);
         setLoading(true);

         const template: TemplateProps = {
            from_name: userName,
            message: message,
            email: userEmail,
         }

         emailjs
            .send('service_ixgbaoq', 'template_ajco01t', {...template}, 'wRstS80Wy24QHk7i7')
            .then(
               () => {
                  setSuccess('Mensagem enviada com sucesso!');
                  setLoading(false);
                  form.current?.reset();
               },
               (error) => {
                  setError('Falha ao enviar a mensagem. Tente novamente.');
                  setLoading(false);
               },
            )
         }
      }

  const handleFocus = () => {
    setError(null);
    setSuccess(null);
  }

  return (
   <>
      <StyledTitle>
         <StyledTitleH2 data-text="Contact">Contact</StyledTitleH2>
      </StyledTitle>
      <StyledCenter>
         <StyledForm ref={form} onSubmit={sendEmail}>
         <BorderTop></BorderTop>
            <StyledContent>
               <StyledLabel>Name:</StyledLabel>
               <StyledInput type="text" name="user_name" onFocus={handleFocus} />
               <StyledLabel>Email:</StyledLabel>
               <StyledInput type="email" name="user_email" onFocus={handleFocus} />
               <StyledLabel>Message:</StyledLabel>
               <StyledTextArea name="message" onFocus={handleFocus} />
               {error && <StyledAlertError>{error}</StyledAlertError>}
               {success && <StyledAlertSuccess success>{success}</StyledAlertSuccess>}
               <StyledCenter>
                  <StyledButtonSubmit type="submit" disabled={loading}>
                     {loading ? 
                     <StyledCenter>
                        <RingLoader color={'rgb(255, 255, 255)'} loading={loading} size={24} /> 
                     </StyledCenter>   
                     : 
                        'Send'
                     }
                  </StyledButtonSubmit>
               </StyledCenter>
            </StyledContent>
         <BorderBottom></BorderBottom>   
         </StyledForm>
      </StyledCenter>
   </>
  )
}
