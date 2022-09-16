export type Project = {
  name: string
  description: string
  repository: string
  technologies: string[]
}

export type Job = {
  position: string
  company: string
  location: string
  description: string
  dates: { from: string; to: string }
}
