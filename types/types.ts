export interface Profile {
  image: string
  name: string
  description: string
  email: string
  resume: string
  technologies: string[]
}

export interface Project {
  name: string
  description: string
  repository: string
  website: string
  technologies: string[]
}

export interface Job {
  position: string
  company: string
  location: string
  description: string
  dates: { from: string; to: string }
}

export type QueryResponse = {
  loading: boolean
  error: boolean
  data: any
}
