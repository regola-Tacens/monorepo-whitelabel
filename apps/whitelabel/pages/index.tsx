import styled from 'styled-components';
import { WhitelabelSharedTestSecond } from '@whitelabel-monorepo-test/whitelabel/shared-test-second';

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <WhitelabelSharedTestSecond />
    </StyledPage>
  );
}

export default Index;
