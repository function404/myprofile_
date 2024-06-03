/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { 
  StyledTitle,
  StyledTitleH2
} from "^/app/components/title";

import {
  StyledProjectsContainer,
  StyledProjectsContainerContent,
  StyledProjectsContainerContentCards,
  StyledProjectsContainerContentCardsTitleProjects,
  StyledProjectsContainerContentCardsTitleProjectsSpan,
  StyledProjectsContainerContentCardsInfo,
  StyledProjectsContainerContentCardsButtomCards,
  StyledProjectsContainerContentCardsButtomCardsImg,
  StyledProjectsContainerContentCardsInfoButtomCards,
  StyledProjectsContainerContentCardsBorderButtom,
} from "^/styles/styledprojects";

import { StyledMainMotion } from "^/app/globals";

import Datatooltip from "^/app/components/datatooltip";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div ref={ref} style={{ position: "relative", alignItems: "center" }}>
        <StyledMainMotion
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <StyledTitle>
            <StyledTitleH2 data-text="Projects">Projects</StyledTitleH2>
          </StyledTitle>
          <StyledProjectsContainer>
            <StyledProjectsContainerContent>

              <StyledProjectsContainerContentCards>
                <StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsTitleProjectsSpan>
                    Sr. & Sra. Bem Estar
                  </StyledProjectsContainerContentCardsTitleProjectsSpan>
                </StyledProjectsContainerContentCardsTitleProjects>
                <StyledProjectsContainerContentCardsInfo>
                  Website developed for work purposes (course).
                </StyledProjectsContainerContentCardsInfo>
                <StyledProjectsContainerContentCardsButtomCards
                  id="btn-1"
                  data-placement="bottom"
                >
                  <a
                    data-tooltip-place="bottom"
                    data-tooltip-id="tooltip-1"
                    data-tooltip-content="Clique na imagem para vizualizar o projeto"
                    href="https://sresrabemestar.000webhostapp.com/"
                    target="_blank"
                  >
                    <StyledProjectsContainerContentCardsButtomCardsImg 
                     src="/sresra.png"
                     alt="erro"
                  />
                  </a>
                </StyledProjectsContainerContentCardsButtomCards>
                <StyledProjectsContainerContentCardsInfoButtomCards>
                  <FontAwesomeIcon icon={faCircleInfo} /> {''}
                  Clique na imagem para vizualizar o projeto
                </StyledProjectsContainerContentCardsInfoButtomCards>
                <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
              </StyledProjectsContainerContentCards>

              <StyledProjectsContainerContentCards>
                <StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsTitleProjectsSpan>
                    Nova Lira Festas e Eventos
                  </StyledProjectsContainerContentCardsTitleProjectsSpan>
                </StyledProjectsContainerContentCardsTitleProjects>
                <StyledProjectsContainerContentCardsInfo>
                  Website developed for the salon Nova Lira Festas e Eventos
                </StyledProjectsContainerContentCardsInfo>
                <StyledProjectsContainerContentCardsButtomCards
                  id="btn-2"
                  data-placement="bottom"
                >
                  <a
                    data-tooltip-place="bottom"
                    data-tooltip-id="tooltip-2"
                    data-tooltip-content="Clique na imagem para vizualizar o projeto"
                    href="https://novalira.netlify.app/"
                    target="_blank"
                  >
                    <StyledProjectsContainerContentCardsButtomCardsImg 
                     src="/novalira.png"
                     alt="err"
                  />
                  </a>
                </StyledProjectsContainerContentCardsButtomCards>
                <StyledProjectsContainerContentCardsInfoButtomCards>
                  <FontAwesomeIcon icon={faCircleInfo} /> {''}
                  Clique na imagem para vizualizar o projeto
                </StyledProjectsContainerContentCardsInfoButtomCards>
                <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
              </StyledProjectsContainerContentCards>

              <StyledProjectsContainerContentCards>
                <StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsTitleProjectsSpan>
                    Quer Namorar Comigo?
                  </StyledProjectsContainerContentCardsTitleProjectsSpan>
                </StyledProjectsContainerContentCardsTitleProjects>
                <StyledProjectsContainerContentCardsInfo>
                  {"Website developed for Valentine's Day."}
                </StyledProjectsContainerContentCardsInfo>
                <StyledProjectsContainerContentCardsButtomCards
                  id="btn-1"
                  data-placement="bottom"
                >
                  <a
                    data-tooltip-place="bottom"
                    data-tooltip-id="tooltip-1"
                    data-tooltip-content="Clique na imagem para vizualizar o projeto"
                    href="https://quer-namora-comigo.netlify.app"
                    target="_blank"
                  >
                    <StyledProjectsContainerContentCardsButtomCardsImg 
                     src="/dateme.png"
                     alt="erro"
                  />
                  </a>
                </StyledProjectsContainerContentCardsButtomCards>
                <StyledProjectsContainerContentCardsInfoButtomCards>
                  <FontAwesomeIcon icon={faCircleInfo} /> {''}
                  Clique na imagem para vizualizar o projeto
                </StyledProjectsContainerContentCardsInfoButtomCards>
                <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
              </StyledProjectsContainerContentCards>

              <StyledProjectsContainerContentCards>
                <StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsTitleProjectsSpan>
                    Personal Website
                  </StyledProjectsContainerContentCardsTitleProjectsSpan>
                </StyledProjectsContainerContentCardsTitleProjects>
                <StyledProjectsContainerContentCardsInfo>
                  My portfolio.
                </StyledProjectsContainerContentCardsInfo>
                <StyledProjectsContainerContentCardsButtomCards
                  id="btn-3"
                  data-placement="bottom"
                >
                  <a
                    data-tooltip-place="bottom"
                    data-tooltip-id="tooltip-3"
                    data-tooltip-content="Clique na imagem para vizualizar o projeto"
                    href="#header"
                  >
                    <StyledProjectsContainerContentCardsButtomCardsImg
                      src="/myportfolio.png"
                      alt="err"
                    />
                  </a>
                </StyledProjectsContainerContentCardsButtomCards>
                <StyledProjectsContainerContentCardsInfoButtomCards>
                  <FontAwesomeIcon icon={faCircleInfo} /> {''}
                  Clique na imagem para vizualizar o projeto
                </StyledProjectsContainerContentCardsInfoButtomCards>
                <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
              </StyledProjectsContainerContentCards>
              
            </StyledProjectsContainerContent>
          </StyledProjectsContainer>
        </StyledMainMotion>
        <Datatooltip />
      </div>
    </>
  );
}
