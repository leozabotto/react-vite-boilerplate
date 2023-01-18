import * as Styled from './styles';
import PropTypes from 'prop-types';

export const App = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};
