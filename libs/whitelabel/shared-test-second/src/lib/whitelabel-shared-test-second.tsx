import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WhitelabelSharedTestSecondProps {}

const StyledWhitelabelSharedTestSecond = styled.div`
  color: pink;
`;

export function WhitelabelSharedTestSecond(
  props: WhitelabelSharedTestSecondProps
) {
  return (
    <StyledWhitelabelSharedTestSecond>
      <h1>Welcome to WhitelabelSharedTestSecond!</h1>
    </StyledWhitelabelSharedTestSecond>
  );
}

export default WhitelabelSharedTestSecond;
