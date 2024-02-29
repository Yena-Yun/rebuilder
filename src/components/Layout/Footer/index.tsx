import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ANCHOR,
  COMPANY_INFO,
  COPY_RIGHT,
  SOCIAL_MEDIA,
  TERM,
} from './constants';
import { Flex, FlexColumn } from 'styles/flex';

export const Footer = () => {
  const { company, service, contact } = ANCHOR;

  return (
    <Container>
      <InnerContainer>
        <HeadContainer>
          <LinkAnchor
            to={company.url}
            target='_blank'
            aria-label={company.ariaLabel}
          >
            {company.name}
          </LinkAnchor>
          <LinkAnchor to={service.path}>{service.text}</LinkAnchor>
          <LinkAnchor to={contact.path}>{contact.text}</LinkAnchor>
        </HeadContainer>

        <InfoContainer>
          {COMPANY_INFO.map(({ id, info }) => (
            <CompanyInfo key={id}>{info}</CompanyInfo>
          ))}
        </InfoContainer>

        <CopyRight>{COPY_RIGHT}</CopyRight>

        <TermContainer>
          {TERM.map((term, index) => (
            <Flex key={index}>
              {term.map(({ id, title, path }) => (
                <TermAnchor key={id} to={path} target='_blank'>
                  {title}
                </TermAnchor>
              ))}
            </Flex>
          ))}
        </TermContainer>

        <Flex>
          {SOCIAL_MEDIA.map(({ id, url, ariaLabel, image, alt }) => (
            <SocialMedia
              key={id}
              to={url}
              target='_blank'
              aria-label={ariaLabel}
            >
              <img src={image} alt={alt} />
            </SocialMedia>
          ))}
        </Flex>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.gray2};

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 30px 0px 60px;
  }
`;

const InnerContainer = styled.div`
  padding: 0 80px;

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 0 70px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0 20px;
  }
`;

const HeadContainer = styled(Flex)`
  margin-bottom: 15px;
`;

const LinkAnchor = styled(Link)`
  color: ${({ theme }) => theme.color.gray4};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  &:not(:first-child) {
    margin-left: 24px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: inherit;
    line-height: 14px;
  }
`;

const InfoContainer = styled(FlexColumn)`
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 14px;
  }
`;

const CompanyInfo = styled.p`
  color: ${({ theme }) => theme.color.gray3};
  font-size: 1.4rem;
  line-height: 140%;

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 1.2rem;
  }
`;

const CopyRight = styled.p`
  min-width: 116px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.gray3};
  font-size: 1.4rem;
  line-height: 17px;

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: inherit;
    line-height: 14px;
  }
`;

const TermContainer = styled(FlexColumn)`
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TermAnchor = styled(Link)`
  min-width: 116px;
  padding-top: 6px;
  color: ${({ theme }) => theme.color.gray4};
  font-size: 1.4rem;
  line-height: 17px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }

  &:not(:first-child) {
    margin-left: 54px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 1.2rem;
    line-height: 20px;
  }
`;

const SocialMedia = styled(Link)`
  margin-left: 20px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
