import styled from 'styled-components';

export const SearchFieldContainerStyled = styled.div`
  position: relative;
  width: fit-content;
`;

export const SearchFieldIconStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
  path {
    fill: var(--colors-lynch);
  }
`;

export const SearchFieldInputStyled = styled.input`
  border-radius: 20px;
  padding: 0 16px 0 48px;
  height: 40px;
  width: 200px;

  background: transparent;
  border: 1px solid transparent;
  box-shadow: 1px 2px 3px 0px transparent inset;
  color: var(--colors-darkBlue);
  &::placeholder {
    color: var(--colors-lynch);
  }

  ${({ theme }) => theme.typography.bodySmall}
  line-height: 18px;

  transition: box-shadow 0.1s, border-color 0.1s, background-color 0.1s;

  &:hover,
  &:focus {
    background-color: #fdfeff;
    border-color: #e7effc;
  }
  &:focus {
    box-shadow: 1px 2px 3px 0px #c6d6ef inset;
    outline: none;
  }
`;
