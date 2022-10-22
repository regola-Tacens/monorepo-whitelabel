import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WhitelabelSharedTestSecondProps {}

const StyledWhitelabelSharedTestSecond = styled.div`
  width: 200px;
  height: 100px;
  padding: 5rem;
  border-radius: 30px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function WhitelabelSharedTestSecond(
  props: WhitelabelSharedTestSecondProps
) {
  return (
    <StyledWhitelabelSharedTestSecond>
      <h1>composant partagé</h1>
    </StyledWhitelabelSharedTestSecond>
  );
}

export default WhitelabelSharedTestSecond;
