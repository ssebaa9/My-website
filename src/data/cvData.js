import React from 'react';

export const workHistorieData = [{
  jobTitle: 'Trainee',
  employer: '"Verde Mortana" Hotel',
  city: 'Kudowa Zdrój',
  startDate: 'Oct 2010',
  endDate: 'Nov 2010',
  workDetails: []
},
{
  jobTitle: 'Trainee',
  employer: '"Manor" Hotel',
  city: 'Olsztyn',
  startDate: 'Jan 2011',
  endDate: 'Feb 2011',
  workDetails: []
},
{
  jobTitle: 'Production Worker',
  employer: 'Z.B. Verspak B.V.',
  city: 'Haarlem, Netherlands',
  startDate: 'Jan 2014',
  endDate: 'Aug 2015',
  workDetails: []
},
{
  jobTitle: 'Expeditor',
  employer: 'Z.B. Verspak B.V.',
  city: 'Haarlem, Netherlands',
  startDate: 'Mar 2016',
  endDate: 'Oct 2016',
  workDetails: ['Supporting production system to enable further important work. Processing incoming orders.']
},
{
  jobTitle: 'Line Coordinator',
  employer: 'Z.B. Verspak B.V.',
  city: 'Haarlem, Netherlands',
  startDate: 'May 2017',
  endDate: 'May 2019',
  workDetails: ['Monitored, recorded and tracked production progress to ensure timely completion of work orders.', 'Examined completed work to identify quality issues.', 'Monitored and managed production and line schedules.']
}
];

const fullDot = (<i style={{ marginRight: '2px' }} className="fas fa-circle"></i>)
const emptyDot = (<i style={{ marginRight: '2px' }} className="far fa-circle"></i>)


export const skillsData = [
  {
    name: 'HTML',
    knowlage: [fullDot, fullDot, fullDot, fullDot, emptyDot]
  },
  {
    name: 'CSS',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
  {
    name: 'JavaScript',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
  {
    name: 'React',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
  {
    name: 'Angular',
    knowlage: [fullDot, emptyDot, emptyDot, emptyDot, emptyDot]
  },
  {
    name: 'Redux',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
  {
    name: 'SASS',
    knowlage: [fullDot, fullDot, emptyDot, emptyDot, emptyDot]
  },
  {
    name: 'GIT',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
  {
    name: 'Jira, Slack, Github',
    knowlage: [fullDot, fullDot, emptyDot, emptyDot, emptyDot]
  },
  {
    name: 'Firebase',
    knowlage: [fullDot, emptyDot, emptyDot, emptyDot, emptyDot]
  },
];

export const languagesData = [
  {
    name: 'English',
    knowlage: [fullDot, fullDot, fullDot, emptyDot, emptyDot]
  },
]