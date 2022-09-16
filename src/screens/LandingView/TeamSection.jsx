
import { useRef } from 'react';
import TeamData from '../../dataSource/team.json';

export default function TeamSection() {
  const teamDataRef = useRef(TeamData);
  return (
    <section className="team-section mt-10">
      <h1 className="team-section-title text-xl text-center dot-font">Our Team</h1>
      <div className="team-details-content-wrapper w-fit h-fit flex flex-row mx-auto items-start justify-center gap-16 mt-8">
        {teamDataRef.current?.map((teamMember, teamMemberIndex) => (
          <div className="team-member-details-container w-fit h-fit flex flex-col items-center justify-start gap-2" key={teamMemberIndex}>
            <img src={teamMember?.github?.avatar} 
              alt={teamMember?.name?.firstName + "-avatar"} 
              id={teamMember?.name?.firstName + "-avatar"} 
              className="w-[140px] h-auto rounded-full" />
              <span className="team-member-name-details-wrapper text-center flex flex-col items-center justify-start gap-1">
                <span className="team-member-name-wrapper text-base font-semibold">
                  <span className="team-member-name-firstName">{teamMember?.name?.firstName}</span>
                  <span className="team-member-name-lastName">{teamMember?.name?.lastName}</span>
                </span>
                <span className="team-member-aka-name text-sm font-normal text-zinc-500">aka, {teamMember?.akaName}</span>
                <a href={teamMember?.github?.profile} 
                  target="_blank" 
                  className="team-member-github-link text-xs font-normal text-blue-500 hover:text-blue-400 hover:underline">
                    {"check github"}
                </a>
              </span>
          </div>
        ))}
      </div>
    </section>  
  )
}