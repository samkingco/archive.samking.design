import React from 'react';
import { Grid, Title } from '../design-system';
import Job from './Job';

function JobList({ jobs, ...props }) {
  return (
    <Grid gridTemplateColumns="repeat(8, 1fr)" {...props}>
      <Title
        as="h2"
        gridColumn={['1 / span 8', null, null, null, '2 / span 5']}
        mb={4}
      >
        History
      </Title>

      {jobs.map((job, index) => (
        <Job
          key={`${job.role}/${job.company}`}
          {...job}
          role="listitem"
          gridColumn={[
            '1 / span 8',
            '2 / span 7',
            '2 / span 6',
            '2 / span 5',
            '3 / span 4',
          ]}
          mb={index !== jobs.length - 1 ? 4 : 0}
        />
      ))}
    </Grid>
  );
}

export default JobList;
