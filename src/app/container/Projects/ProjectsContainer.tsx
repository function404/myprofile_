'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { FaCircleInfo } from 'react-icons/fa6'

import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import { useProjectsContainerRules } from '^/app/container/Projects/ProjectsContainer.rules'
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
  StyledContainerTechs,
  StyledContentTechs,
  StyledIconsNameTechs,
} from '^/app/container/Projects/ProjectsContainer.styles'

import { ProjectsData } from '^/app/data/Projects/ProjectsData'

import { 
    StyledTitle,
    StyledTitleH2,
} from '^/theme/Title/TitleTheme'

import { StyledMainMotion } from '^/app/globals'

export const ProjectsContainer = () => {
    const {
        ref,
        mainControls
    } = useProjectsContainerRules()

  return (
    <>
      <div ref={ref} style={{ position: 'relative', alignItems: 'center' }}>
        <StyledMainMotion
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <StyledTitle>
            <StyledTitleH2 data-text='Projects'>Projects</StyledTitleH2>
          </StyledTitle>
          <StyledProjectsContainer>
            <StyledProjectsContainerContent>
              {ProjectsData.map((project, index) => (
                <StyledProjectsContainerContentCards key={index}>
                  <StyledProjectsContainerContentCardsTitleProjects>
                    <StyledProjectsContainerContentCardsTitleProjectsSpan>
                      {`${project.title}`}
                    </StyledProjectsContainerContentCardsTitleProjectsSpan>
                  </StyledProjectsContainerContentCardsTitleProjects>
                  <StyledProjectsContainerContentCardsInfo>
                    {`${project.description}`}
                  </StyledProjectsContainerContentCardsInfo>
                  <StyledProjectsContainerContentCardsButtomCards
                    id={`btn-${index}`}
                    data-placement='bottom'
                  >
                    <a
                      data-tooltip-place='bottom'
                      data-tooltip-id={`tooltip-${index}`}
                      data-tooltip-content='Click on the image to view the project'
                      href={`${project.link}`}
                      {...project.target ? { target: '_blank' } : {target: ''}}
                    >
                      <Tilt
                      perspective={6000}
                      >
                        <StyledProjectsContainerContentCardsButtomCardsImg 
                          src={`${project.img}`}
                          alt='erro'
                        />
                      </Tilt>
                    </a>
                  </StyledProjectsContainerContentCardsButtomCards>
                  <StyledProjectsContainerContentCardsInfoButtomCards>
                    <FaCircleInfo /> {''}
                    Click on the image to view the project
                  </StyledProjectsContainerContentCardsInfoButtomCards>
                  <StyledContainerTechs>
                      {project.techs && project.techs.map((tech, index) => (
                        <>
                          <Tilt
                            perspective={250}
                          >
                            <StyledContentTechs key={index}>
                              <StyledIconsNameTechs>
                                  {(tech.icon({}))} {`${tech.name}`} 
                              </StyledIconsNameTechs>
                            </StyledContentTechs>
                          </Tilt>
                        </>
                      ))}
                  </StyledContainerTechs>
                  <StyledProjectsContainerContentCardsBorderButtom></StyledProjectsContainerContentCardsBorderButtom>
                </StyledProjectsContainerContentCards>
              ))}              
            </StyledProjectsContainerContent>
          </StyledProjectsContainer>
        </StyledMainMotion>
        <DataTooltipComponent />
      </div>
    </>
  )
}
