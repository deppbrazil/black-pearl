import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ children, kind, size, onClick, ...attributes }) => {
  return (
    <S.Button
      data-testid="button"
      type="button"
      kind={kind}
      size={size}
      {...attributes}
      onClick={onClick}>
        {children}
    </S.Button>
  );
};

Button.propTypes = {
  kind: PropTypes.oneOf(['solid', 'ghost', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = { kind: 'solid', size: 'medium'};

export default Button;
