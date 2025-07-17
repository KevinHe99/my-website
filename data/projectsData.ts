interface Project {
  draft: boolean
  title: string
  series: string
  description: string
  href?: string
  imgSrc?: string
}

// Order is newest to oldest
const projectsData: Project[] = [
  {
    draft: true,
    title: 'Project 001 - Simple Calculator',
    series: 'NEET to SWE Series',
    description: `A calculator on the terminal`,
    imgSrc: '/static/images/placeholder.png',
    href: '/blog/neet-to-swe/nts-001-simple-calculator',
  },
]

export default projectsData
