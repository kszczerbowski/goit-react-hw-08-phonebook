import { StyledLoader, EmptyDiv } from './Loader.styled.js';
import { getIsLoadingContacts } from 'redux/selectors.js';
import { useSelector } from 'react-redux';

export const Loader = () => {
  const isLoading = useSelector(getIsLoadingContacts);
  if (isLoading) {
    return <StyledLoader />;
  } else {
    return <EmptyDiv />;
  }
};
