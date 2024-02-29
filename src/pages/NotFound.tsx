import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <InnerContainer>
        <NotFoundContent>
          <StatusNumber>404</StatusNumber>
          <br />
          <ErrorReason>Page Not Found</ErrorReason>
          <br />
          <br />
          <a href='https://rebuilderai.com' aria-label='Go Back to Homepage'>
            <UserDirection>Get Back to HomePage</UserDirection>
          </a>
        </NotFoundContent>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const InnerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const NotFoundContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
`;

const StatusNumber = styled.span`
  font-size: 20rem;
`;

const ErrorReason = styled.span`
  font-size: 4rem;
`;

const UserDirection = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.blue1};
  cursor: pointer;
`;

export default NotFound;
