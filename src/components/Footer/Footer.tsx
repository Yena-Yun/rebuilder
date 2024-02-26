import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GroupBox } from './shared/GroupBox';
import {
  ANCHOR,
  COMPANY_INFO,
  COPY_RIGHT,
  SOCIAL_MEDIA,
  TERM,
} from './constants';
import { Flex } from 'styles/flex';

export const Footer = () => {
  const navigate = useNavigate();

  const { company, service, contact } = ANCHOR;

  return (
    <Container>
      <InnerContainer>
        <GroupBox $mb='15' $flex='row'>
          <LinkAnchor
            to={company.url}
            target='_blank'
            aria-label={company.ariaLabel}
          >
            {company.name}
          </LinkAnchor>
          <RouteAnchor onClick={() => navigate(service.path)}>
            {service.text}
          </RouteAnchor>
          <RouteAnchor onClick={() => navigate(contact.path)}>
            {contact.text}
          </RouteAnchor>
        </GroupBox>

        <GroupBox $mb='10' $flex='col'>
          {COMPANY_INFO.map(({ id, info }) => (
            <CompanyInfo key={id}>{info}</CompanyInfo>
          ))}
        </GroupBox>

        <CopyRight>{COPY_RIGHT}</CopyRight>

        <GroupBox $mb='20' $flex='col' $gap='6'>
          {TERM.map((term, index) => (
            <Flex key={index}>
              {term.map(({ id, title, path }) => (
                <TermAnchor key={id} to={path} target='_blank'>
                  {title}
                </TermAnchor>
              ))}
            </Flex>
          ))}
        </GroupBox>

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
`;

const InnerContainer = styled.div`
  padding: 0 80px;
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
`;

const RouteAnchor = styled.p`
  margin-left: 24px;
  color: ${({ theme }) => theme.color.gray4};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const CompanyInfo = styled.p`
  color: ${({ theme }) => theme.color.gray3};
  font-size: 1.4rem;
  line-height: 140%;
`;

const CopyRight = styled.p`
  min-width: 116px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.gray3};
  font-size: 1.4rem;
  line-height: 17px;
`;

const TermAnchor = styled(Link)`
  min-width: 116px;
  color: ${({ theme }) => theme.color.gray4};
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

const SocialMedia = styled(Link)`
  margin-left: 20px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
