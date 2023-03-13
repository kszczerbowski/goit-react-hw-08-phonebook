import React from 'react';
import {
  StyledFilterArea,
  StyledLabel,
  StyledFilterInput,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = event => {
    const newFilterValue = event.target.value;
    dispatch(setFilter(newFilterValue));
  };
  return (
    <StyledFilterArea>
      <StyledLabel htmlFor="filterInput">Find contacts by name</StyledLabel>
      <StyledFilterInput
        onChange={onFilter}
        id="filterInput"
        type="text"
        name="filter"
      ></StyledFilterInput>
    </StyledFilterArea>
  );
};
