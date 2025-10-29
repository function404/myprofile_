'use client'

import { RingLoader } from 'react-spinners'
import { motion, AnimatePresence } from 'framer-motion'

import { ProjectCard } from '^/app/components/ProjectCard/ProjectCardComponent'
import { DataTooltipComponent } from '^/app/components/DataTooltip/DataTooltipComponent'

import styles from '^/app/container/Projects/ProjectsContainer.module.css'
import { useProjectsContainerRules } from '^/app/container/Projects/ProjectsContainer.rules'

import titleStyles from '^/theme/Title/Title.module.css'

export function ProjectsContainer() {
  const { 
    ref,
    mainControls,
    filter,
    setFilter,
    filteredProjects,
    filterButtons,
    loading,
    error,
  } = useProjectsContainerRules()

  const gridClassName = `${styles.projectsGrid} ${
    filter === 'mobile' ? styles.mobileGrid : ''
  }`

  const renderContent = () => {
    if (loading) {
      return (
        <div className={styles.loadingContainer}>
          <RingLoader color={`rgb(244, 244, 244)`} loading={loading} size={80} />
        </div>
      );
    }

    if (error) {
      return <p className={styles.errorText}>{error}</p>
    }

    if (filteredProjects.length === 0) {
      return (
        <p className={styles.emptyText}>
          Nenhum projeto encontrado para este filtro.
        </p>
      )
    }

    return (
      <div className={gridClassName}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div ref={ref} className={styles.sectionContainer}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay: 0.5 }}
        className="main-motion"
      >
        <div className={titleStyles.title}>
          <h2 data-text="Projects" className={titleStyles.titleH2}>
            Projects
          </h2>
        </div>

        <div className={styles.filterContainer}>
          {filterButtons.map(({ label, type }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`${styles.filterButton} ${
                filter === type ? styles.active : ''
              }`}
              disabled={loading}
            >
              {label}
            </button>
          ))}
        </div>

        {renderContent()}

      </motion.div>
      <DataTooltipComponent />
    </div>
  )
}
