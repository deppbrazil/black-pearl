import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import blackpearlTheme from './blackpearlTheme';

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.shape({
    title: PropTypes.string,
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      tertiary: PropTypes.string,
      quaternary: PropTypes.string,
    }),
    monochrome: PropTypes.shape({
      dark100: PropTypes.string,
      light100: PropTypes.string,
      neutral100: PropTypes.string,
      neutral200: PropTypes.string,
      neutral300: PropTypes.string,
      neutral400: PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
};

Theme.defaultProps = { theme: blackpearlTheme };

export default Theme;