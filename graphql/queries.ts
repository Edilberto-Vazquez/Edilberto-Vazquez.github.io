import { Job, Profile, Project } from "../types/types"

type AboutPageQuery = Profile & {
  jobs: Job[]
}

interface IndexPageQuery extends Omit<Profile, "resume"> {
  projects: Project[]
}

export const aboutPageQuery: {
  value: string
  name: string
  response: AboutPageQuery
} = {
  value: `
    query AboutPageQuery($lang: String!) {
      fullProfile(lang: $lang) {
        image
        name
        description
        email
        technologies
        resume
        jobs {
          position
          company
          location
          description
          dates {
            from
            to
          }
        }
      }
    }
  `,
  name: "fullProfile",
  response: {
    image: "",
    name: "",
    description: "",
    email: "",
    technologies: [],
    resume: "",
    jobs: [],
  },
}

export const indexPageQuery: {
  value: string
  name: string
  response: IndexPageQuery
} = {
  value: `
    query IndexPageQuery($lang: String!) {
      fullProfile(lang: $lang) {
        image
        name
        description
        email
        technologies
        projects {
          name
          description
          repository
          technologies
          website
        }
      }
    }
  `,
  name: "fullProfile",
  response: {
    image: "",
    name: "",
    description: "",
    email: "",
    technologies: [],
    projects: [],
  },
}
