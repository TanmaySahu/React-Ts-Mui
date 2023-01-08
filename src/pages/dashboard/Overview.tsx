import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Typography
} from '@material-ui/core';
import useSettings from '../../hooks/useSettings';

const Overview: FC = () => {
  const { settings } = useSettings();

  return (
    <>
      <Helmet>
        <title>Dashboard: Overview | react_ts_mui</title>
      </Helmet>
      <Box>
        <Typography variant="h1">Overview</Typography>
      </Box>
    </>
  );
};

export default Overview;
