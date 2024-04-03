'use client';

import {
  StyledHeader,
  StyledHeaderMainImg,
  StyledHeaderMainImgTextOverlayB,
  StyledHeaderMainImgTextOverlay,
  StyledHeaderMainImgTextOverlayC,
  StyledHeaderMainImgTextOverlaySwipe,
  StyledHeaderMainImgTextOverlaySwipeH1,
  StyledHeaderMainImgTextOverlaySwipeH3,
  StyledHeaderMainImgTextOverlaySwipeH4,
  StyledHeaderMainResponsive,
} from '^/styles/styledheader';

export default function Header() {
  return (
    <>
      <StyledHeader 
        id='header'>
        <StyledHeaderMainImg>
          <StyledHeaderMainImgTextOverlayB>
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH1>
                I am
              </StyledHeaderMainImgTextOverlaySwipeH1>
            </StyledHeaderMainImgTextOverlaySwipe>
          </StyledHeaderMainImgTextOverlayB>
          <StyledHeaderMainImgTextOverlay>
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH3>
                Function404
              </StyledHeaderMainImgTextOverlaySwipeH3>
            </StyledHeaderMainImgTextOverlaySwipe>
          </StyledHeaderMainImgTextOverlay>
          <StyledHeaderMainImgTextOverlayC>
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH4>
                Dedicated to front-end mobile and web development programming
              </StyledHeaderMainImgTextOverlaySwipeH4>
            </StyledHeaderMainImgTextOverlaySwipe>
          </StyledHeaderMainImgTextOverlayC>
        </StyledHeaderMainImg>
        <StyledHeaderMainResponsive>
          <div>
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH1>
                I am
              </StyledHeaderMainImgTextOverlaySwipeH1>
            </StyledHeaderMainImgTextOverlaySwipe>
          </div>
          <div >
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH3>
                Function404
              </StyledHeaderMainImgTextOverlaySwipeH3>
            </StyledHeaderMainImgTextOverlaySwipe>
          </div>
          <div>
            <StyledHeaderMainImgTextOverlaySwipe>
              <StyledHeaderMainImgTextOverlaySwipeH4>
                Dedicated to front-end mobile and web development programming
              </StyledHeaderMainImgTextOverlaySwipeH4>
            </StyledHeaderMainImgTextOverlaySwipe>
          </div>
        </StyledHeaderMainResponsive>
      </StyledHeader>
    </>
  );
}
