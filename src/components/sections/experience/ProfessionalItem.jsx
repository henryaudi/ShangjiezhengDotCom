import { Box, Grow, Typography } from '@mui/material';
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

// Group consecutive jobs at the same company into one timeline entry.
const companyGroups = jobs.reduce((acc, job) => {
  const last = acc[acc.length - 1];
  if (last && last.company === job.company) {
    last.roles.push(job);
  } else {
    acc.push({ company: job.company, icon: job.icon, roles: [job] });
  }
  return acc;
}, []);

function RoleTimeline({ roles }) {
  return (
    <Box
      sx={{
        mt: 0.75,
        ml: 0.5,
        borderLeft: '2px solid',
        borderColor: 'grey.300',
      }}
    >
      {roles.map((role, index) => {
        const isLast = index === roles.length - 1;
        return (
          <Box
            key={role.title + role.date}
            sx={{
              position: 'relative',
              pl: 2.5,
              pb: isLast ? 0 : 2,
            }}
          >
            {/* Role indicator dot — centred on the left border */}
            <Box
              sx={{
                position: 'absolute',
                left: -7,   // centres the 12 px dot on the 2 px border line
                top: 3,
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: colors.primary,
                opacity: 0.55,
                border: '2px solid white',
                boxSizing: 'border-box',
              }}
            />
            <JobItem job={role} showCompany={false} />
          </Box>
        );
      })}
    </Box>
  );
}

function ProfessionalItem() {
  const { ref: containerRef, inView } = useInViewOnce();

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '90%', lg: '90%' },
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
        {companyGroups.map((group, groupIndex) => (
          <Grow
            key={group.company + groupIndex}
            in={inView}
            style={{ transformOrigin: '0 0 0' }}
            timeout={300 + groupIndex * 150}
          >
            <Box>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: colors.primary }}>
                    <CustomSvgIcon
                      path={group.icon}
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(180deg) brightness(100%) contrast(100%)',
                      }}
                    />
                  </TimelineDot>
                  {groupIndex !== companyGroups.length - 1 && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>

                <TimelineContent>
                  {/* Company name — shown once per group */}
                  <Typography
                    variant='h6'
                    component='h3'
                    sx={{ fontWeight: 'bold', mb: 0.25 }}
                  >
                    {group.company}
                  </Typography>

                  <RoleTimeline roles={group.roles} />
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
