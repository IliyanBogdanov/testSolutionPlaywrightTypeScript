import styled from 'styled-components';

export const Field = styled.div`
  display: block;

  --labelColor: var(--colors-bayoux);

  &:focus-within {
    --labelColor: var(--colors-irisBlue);
  }

  & + & {
    margin-top: 32px;
  }
`;

export const Label = styled.span`
  display: block;
  color: var(--labelColor);
  ${({ theme }) => theme.typography.bodyXs}
  opacity: ${({ $hasValue }) => ($hasValue ? 1 : 0)}
`;

const Text = styled.span`
  display: block;
  color: var(--colors-bayoux);
  margin-top: 4px;
`;

const ErrorMsg = styled.span`
  color: var(--colors-redPink);
`;

export const HintText = styled(Text)`
  margin-top: 6px !important;
  ${({ theme }) => theme.typography.bodyXs}
`;

export function Hint({ errorMsg, helper }) {
  return (
    <HintText>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {errorMsg && helper && ' - '}
      {helper}
    </HintText>
  );
}
