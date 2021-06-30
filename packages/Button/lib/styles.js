import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import { blackpearlTheme } from '../../core/lib';

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 400;
  padding: .4em 1.2em;
  margin: .30rem;
  border-radius: 2rem;
  cursor: pointer;
  outline: 1px solid transparent;
  border: 4px solid transparent;
  transition: all .2s ease-in-out;

  &:disabled,
  &:disabled:hover {
    border: 4px solid transparent;
    text-decoration: none;
    border-radius: 2rem;
    ${({ theme }) =>
      css`
        color: ${theme.monochrome.neutral200};
      `};
    ${({ theme }) =>
      css`
        background: ${theme.monochrome.neutral400};
      `};
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => lighten(0.3, theme.colors.primary)};
  }

  /* Type */
  ${({ kind, theme }) =>
    kind === 'solid' &&
    css`
      color: ${theme.monochrome.light100};
      background: ${theme.colors.primary};

      &:hover {
        background: ${theme.colors.secondary};
      }
    `}

  ${({ kind, theme }) =>
    kind === 'ghost' &&
    css`
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      background: transparent;

      &:hover {
        color: ${theme.monochrome.light100};
        border: 2px solid transparent;
        background: ${theme.colors.primary};
      }
    `}

  ${({ kind, theme }) =>
    kind === 'link' &&
    css`
      border-radius: 0;
      border: 2px solid transparent;
      color: ${theme.colors.primary};
      background: transparent;

      &:hover,
      &:hover a {
        color: ${theme.colors.secondary};
        text-decoration: underline;
      }
    `}

  /* Size */
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 0.8rem;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 1.2rem;
    `}
`;

Button.defaultProps = {
  theme: blackpearlTheme,
};
