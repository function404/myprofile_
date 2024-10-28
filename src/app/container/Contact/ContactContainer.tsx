'use client';

import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

import { StyledTitle, StyledTitleH2 } from '^/theme/Title/TitleTheme';

import { useContactContainerRules } from '^/app/container/Contact/ContactContainer.rules';
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
} from '^/app/container/Contact/ContactContainer.styles';

import { StyledMainMotion, BorderTop, BorderBottom } from '^/app/globals';

export const ContactContainer = () => {
    const {
        ref,
        form,
        error,
        success,
        loading,
        sendEmail,
        handleFocus,
        mainControls,
    } = useContactContainerRules()

  return (
   <>
      <div ref={ref} style={{ position: 'relative', alignItems: 'center' }}>
         <StyledMainMotion
            variants={{
               hidden: { opacity: 0, x: 100 },
               visible: { opacity: 1, x: 0 },
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 2, delay: 0.5 }}
         >
            <StyledTitle>
               <StyledTitleH2 data-text='Contact'>Contact</StyledTitleH2>
            </StyledTitle>
            <StyledCenter>
               <StyledForm ref={form} onSubmit={sendEmail}>
                  <BorderTop></BorderTop>
                     <StyledContent>
                        <StyledLabel>Name:</StyledLabel>
                        <StyledInput type='text' name='user_name' onFocus={handleFocus} />
                        <StyledLabel>Email:</StyledLabel>
                        <StyledInput type='email' name='user_email' onFocus={handleFocus} />
                        <StyledLabel>Message:</StyledLabel>
                        <StyledTextArea name='message' onFocus={handleFocus} />
                        {error && <StyledAlertError>{error}</StyledAlertError>}
                        {success && <StyledAlertSuccess success>{success}</StyledAlertSuccess>}
                        <StyledCenter>
                           <StyledButtonSubmit type='submit' disabled={loading}>
                              {loading ? (
                              <StyledCenter>
                                 <RingLoader color={'rgb(255, 255, 255)'} loading={loading} size={24} /> 
                              </StyledCenter>   
                              ) : ( 
                                 'Send'
                              )}
                           </StyledButtonSubmit>
                        </StyledCenter>
                     </StyledContent>
                  <BorderBottom></BorderBottom>   
               </StyledForm>
            </StyledCenter>
         </StyledMainMotion>
      </div>
   </>
  )
}
