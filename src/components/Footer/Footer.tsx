import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  InstagramImage,
  LinkedinImage,
  NaverBlogImage,
  TistoryImage,
} from './assets/SNSImages';

export const Footer = () => {
  const navigate = useNavigate();

  const moveToPage = (link: string) => {
    navigate(link);
  };

  return (
    <Container>
      <InnerContainer>
        <RedirectGroup>
          <RedirectAnchor to='https://rebuilderai.com/' target='_blank'>
            (주)리빌더에이아이
          </RedirectAnchor>
          <MoveAnchor onClick={() => moveToPage('/')}>서비스 소개</MoveAnchor>
          <MoveAnchor onClick={() => moveToPage('/contact')}>
            기업문의
          </MoveAnchor>
        </RedirectGroup>

        <InfoGroup>
          <p>사업자 등록번호: 483-88-02098 | 대표: 김정현</p>
          <p>
            호스팅 서비스: 주식회사 리빌더에이아이 | 통신판매업 신고번호:
            2022-서울서초-0594
          </p>
          <p>주소: 13561 경기도 성남시 분당구 정자일로 95 네이버 1784 4층</p>
          <p>이메일: contact@rebuilderai.com</p>
        </InfoGroup>

        <CopyRight>COPYRIGHT ©2024 Rebuilderai. ALL RIGHTS RESERVED.</CopyRight>

        <TermGroup>
          <FlexRow>
            <TermAnchor
              to='/policy/service-using'
              target='_blank'
              aria-label='Go to RebuilderAI Homepage'
            >
              서비스 이용약관 동의
            </TermAnchor>
            <TermAnchor to='/policy/privacy' target='_blank'>
              개인정보 처리방침 동의
            </TermAnchor>
          </FlexRow>
          <FlexRow>
            <TermAnchor to='/policy/data-afford' target='_blank'>
              데이터 이용동의
            </TermAnchor>
            <TermAnchor to='/policy/third-agree' target='_blank'>
              제 3자 정보제공 동의
            </TermAnchor>
          </FlexRow>
          <FlexRow>
            <TermAnchor to='/policy/advertise-agree' target='_blank'>
              광고성 정보수신 동의
            </TermAnchor>
          </FlexRow>
        </TermGroup>

        <SocialMediaGroup>
          <SocialMedia
            to='https://www.instagram.com/rebuilderai/'
            target='_blank'
            aria-label='Go to SNSPage'
          >
            <img src={InstagramImage} alt='Go to RebuilderAI Instagram' />
          </SocialMedia>
          <SocialMedia
            to='https://www.linkedin.com/company/%EB%A6%AC%EB%B9%8C%EB%8D%94ai/'
            target='_blank'
            aria-label='Go to SNSPage'
          >
            <img src={LinkedinImage} alt='Go to RebuilderAI LinkedIn' />
          </SocialMedia>
          <SocialMedia
            to='https://blog.naver.com/rebuilderai'
            target='_blank'
            aria-label='Go to SNSPage'
          >
            <img src={NaverBlogImage} alt='Go to RebuilderAI Naver blog' />
          </SocialMedia>
          <SocialMedia
            to='https://rebuilderaitech.tistory.com/'
            target='_blank'
            aria-label='Go to SNSPage'
          >
            <img src={TistoryImage} alt='Go to RebuilderAI Tistory' />
          </SocialMedia>
        </SocialMediaGroup>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: rgb(230, 232, 235);
`;

const InnerContainer = styled.div`
  padding: 0 80px;
`;

const RedirectGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  p {
    color: rgb(189, 193, 199);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 140%;
  }
`;

const CopyRight = styled.p`
  min-width: 116px;
  margin-bottom: 10px;
  color: rgb(189, 193, 199);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 17px;
`;

const RedirectAnchor = styled(Link)`
  color: rgb(111, 117, 123);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const MoveAnchor = styled.p`
  margin-left: 24px;
  color: rgb(111, 117, 123);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const FlexRow = styled.div`
  display: flex;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TermGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TermAnchor = styled(Link)`
  min-width: 116px;
  color: rgb(111, 117, 123);
  font-size: 1.4rem;
  line-height: 17px;
  padding-top: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  &:not(:first-child) {
    margin-left: 54px;
  }
`;

const SocialMediaGroup = styled.div`
  display: flex;
`;

const SocialMedia = styled(Link)`
  margin-left: 20px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
