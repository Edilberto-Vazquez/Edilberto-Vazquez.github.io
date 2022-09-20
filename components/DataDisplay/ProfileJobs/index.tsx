import React from "react"
import { Job } from "../../../types/types"

const ProfileJobs = ({
  position,
  company,
  location,
  description,
  dates,
}: Job) => {
  return (
    <div className="job-card">
      <h3 className="job-card__header">
        {company} <span>{`${dates.from} - ${dates.to}`}</span>
      </h3>
      <span className="job-card__position">{position}</span>
      <span className="job-card__location">{location}</span>
      <p className="job-card__description">{description}</p>
    </div>
  )
}

export default ProfileJobs
