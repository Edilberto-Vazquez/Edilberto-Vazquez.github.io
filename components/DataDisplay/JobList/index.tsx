import React from "react"
import { Job } from "../../../types/types"
import JobCard from "../JobCard"

type JobListProps = {
  jobs: Job[]
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <ul className="previous-jobs">
      {jobs.map(
        (
          { position, company, location, description, dates }: Job,
          index: number
        ): JSX.Element => (
          <li className="previous-jobs__item" key={index}>
            <JobCard
              position={position}
              company={company}
              location={location}
              description={description}
              dates={dates}
            />
          </li>
        )
      )}
    </ul>
  )
}

export default JobList
