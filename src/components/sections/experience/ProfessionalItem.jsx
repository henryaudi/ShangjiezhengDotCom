import { Box, Grow } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

import { jobs } from '../../../data/jobs';
import { useInViewOnce } from '../../../hooks/useInViewOnce';
import JobItem from './JobItem';
import CustomSvgIcon from '../../ui/CustomSvgIcon';
import { colors } from '../../../theme/colors';

function ProfessionalItem() {
  const { ref: containerRef, inView } = useInViewOnce();

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '90%', lg: '90%' },
        margin: '2 auto',
        mt: '0.5em',
      }}
    >
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {jobs.map((job, index) => (
          <Grow
            key={job.title + job.date}
            in={inView}
            style={{ transformOrigin: '0 0 0' }}
            timeout={300 + index * 100}
          >
            <Box>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: colors.primary }}>
                    <CustomSvgIcon
                      path={job.icon}
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(180deg) brightness(100%) contrast(100%)',
                      }}
                    />
                  </TimelineDot>
                  {index !== jobs.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <JobItem job={job} />
                </TimelineContent>
              </TimelineItem>
            </Box>
          </Grow>
        ))}
      </Timeline>
    </Box>
  );
}

export default ProfessionalItem;
