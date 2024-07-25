'use client';

import {
  StyledCenter,
  StyledMainImg,
  StyledMainImgTextOverlayB,
  StyledMainImgTextOverlay,
  StyledMainImgTextOverlayC,
  StyledMainImgTextOverlaySwipe,
  StyledMainImgTextOverlaySwipeH1,
  StyledMainImgTextOverlaySwipeH3,
  StyledMainImgTextOverlaySwipeH4,
  StyledMainResponsive,
} from '^/styles/styledmainimg';

export default function Mainimg() {
  return (
    <>
      <StyledCenter 
        id='header'>
        <StyledMainImg>
          <StyledMainImgTextOverlayB>
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH1>
                I am
              </StyledMainImgTextOverlaySwipeH1>
            </StyledMainImgTextOverlaySwipe>
          </StyledMainImgTextOverlayB>
          <StyledMainImgTextOverlay>
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH3>
                Function404
              </StyledMainImgTextOverlaySwipeH3>
            </StyledMainImgTextOverlaySwipe>
          </StyledMainImgTextOverlay>
          <StyledMainImgTextOverlayC>
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH4>
                Dedicated to front-end mobile and web development programming
              </StyledMainImgTextOverlaySwipeH4>
            </StyledMainImgTextOverlaySwipe>
          </StyledMainImgTextOverlayC>
        </StyledMainImg>
        
        <StyledMainResponsive>
          <div>
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH1>
                I am
              </StyledMainImgTextOverlaySwipeH1>
            </StyledMainImgTextOverlaySwipe>
          </div>
          <div >
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH3>
                Function404
              </StyledMainImgTextOverlaySwipeH3>
            </StyledMainImgTextOverlaySwipe>
          </div>
          <div>
            <StyledMainImgTextOverlaySwipe>
              <StyledMainImgTextOverlaySwipeH4>
                Dedicated to front-end mobile and web development programming
              </StyledMainImgTextOverlaySwipeH4>
            </StyledMainImgTextOverlaySwipe>
          </div>
        </StyledMainResponsive>
      </StyledCenter>
    </>
  );
}
