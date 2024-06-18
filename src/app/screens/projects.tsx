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

import { ProjectsData } from "^/app/utils/projects";

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
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
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
              {ProjectsData.map((project, index) => (
                <StyledProjectsContainerContentCards key={index}>
                  <StyledProjectsContainerContentCardsTitleProjects>
                    <StyledProjectsContainerContentCardsTitleProjectsSpan>
                      {project.title}
                    </StyledProjectsContainerContentCardsTitleProjectsSpan>
                  </StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsInfo>
                    {project.description}
                  </StyledProjectsContainerContentCardsInfo>
                  <StyledProjectsContainerContentCardsButtomCards
                    id={`btn-${index}`}
                    data-placement="bottom"
                  >
                    <a
                      data-tooltip-place="bottom"
                      data-tooltip-id={`tooltip-${index}`}
                      data-tooltip-content="Clique na imagem para visualizar o projeto"
                      href={project.link}
                      target="_blank"
                    >
                      <StyledProjectsContainerContentCardsButtomCardsImg 
                        src={project.img}
                        alt="erro"
                      />
                    </a>
                  </StyledProjectsContainerContentCardsButtomCards>
                  <StyledProjectsContainerContentCardsInfoButtomCards>
                    <FontAwesomeIcon icon={faCircleInfo} /> {''}
                    Clique na imagem para visualizar o projeto
                  </StyledProjectsContainerContentCardsInfoButtomCards>
                  <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
                </StyledProjectsContainerContentCards>
              ))}              
            </StyledProjectsContainerContent>
          </StyledProjectsContainer>
        </StyledMainMotion>
        <Datatooltip />
      </div>
    </>
  );
}
