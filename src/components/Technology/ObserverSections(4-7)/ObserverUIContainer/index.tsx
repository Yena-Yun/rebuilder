import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useBackgroundObserver } from './hooks/useBackgroundObserver';
import { useVideoObserver } from './hooks/useVideoObserver';
import { useScrollView } from './hooks/useScrollView';
import { useMedia } from 'hooks/useMedia';
import { FlexColumn } from 'styles/flex';

interface ObserverUIProps {
  order: number;
  content: {
    head: Object;
    body: Object;
  };
  isLastSection?: boolean;
}

const PREVIEW_WEBP = '/images/video-preview.webp';
const PREVIEW_JPG = '/images/video-preview.jpg';
const BG_SOURCE = '/images/overlay.jpg';
const LAST_VIDEO_SOURCE = '/videos/tech_video7.mp4';

export const ObserverUIContainer = ({
  order,
  content,
  isLastSection,
}: ObserverUIProps) => {
  const { t } = useTranslation();

  const { containerRef, backgroundStatus } = useBackgroundObserver();
  const { videoRef, isInViewport } = useVideoObserver();
  const { scrollRefs } = useScrollView();
  const { isMobile, isTabletS } = useMedia();

  const media = isMobile ? 'mobile' : isTabletS ? 'tablet' : 'pc';

  const videoSource = `/videos/${media}/tech_video${order}_${media}.mp4`;

  return (
    <div ref={scrollRefs[order - 4]}>
      <Container ref={containerRef}>
        <VideoContainer ref={videoRef} className={backgroundStatus}>
          {!isInViewport ? (
            <picture>
              <source srcSet={PREVIEW_WEBP} type='image/webp' />
              <img src={PREVIEW_JPG} alt='video-preview' />
            </picture>
          ) : (
            <>
              {isLastSection && (
                <Overlay src={BG_SOURCE} alt='last-video-overlay' />
              )}
              {isLastSection ? (
                <LastVideo preload='none' loop playsInline autoPlay muted>
                  <source src={LAST_VIDEO_SOURCE} type='video/mp4' />
                </LastVideo>
              ) : (
                <Video loop playsInline autoPlay muted src={videoSource} />
              )}
            </>
          )}
        </VideoContainer>

        <TextContainer>
          <HeadContainer>
            {Object.keys(content.head).map((key, id) => (
              <Head key={key}>{t(`section${order}.head.line${id + 1}`)}</Head>
            ))}
          </HeadContainer>
          {Object.keys(content.body).map((key, id) => (
            <Line key={key}>{t(`section${order}.body.line${id + 1}`)}</Line>
          ))}
        </TextContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200vh;
  background-color: ${({ theme }) => theme.color.darkBlack1};

  @media ${({ theme }) => theme.media.tabletS} {
    height: 100vh;
  }
`;

const Overlay = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: auto;

  &.beforeIntersect {
    position: absolute;
    top: 0;
    bottom: unset;
  }

  &.isIntersecting {
    position: fixed;
    top: 0;
    bottom: unset;
  }

  &.afterIntersect {
    position: absolute;
    top: unset;
    bottom: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
`;

const LastVideo = styled.video`
  position: absolute;
  top: 25vh;
  right: 10vw;
  width: 100%;
  height: auto;
  max-width: 952px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.laptop} {
    right: unset;
    left: 50%;
    transform: translate(-50%);
    padding: 0 30px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    top: 40vh;
    max-width: 628px;
    padding: 0 70px;
  }
`;

const TextContainer = styled(FlexColumn)`
  position: absolute;
  top: 60%;
  left: 5%;
  align-items: flex-start;
  width: auto;
  padding: 32px 50px;
  background-color: ${({ theme }) => theme.color.lightBlack3};
  border-radius: 10px;
  transform: translate(0px, -50%);
  backdrop-filter: blur(6px);
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlack4};
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 28px 32px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    padding: 24px 28px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    top: 50px;
    left: 5%;
    transform: unset;
    background: unset;
    backdrop-filter: unset;
    padding: 0;
  }
`;

const HeadContainer = styled(FlexColumn)`
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.laptop} {
    margin-bottom: 36px;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    margin-bottom: 24px;
  }
`;

const Head = styled.span`
  font-size: 4rem;
  font-weight: 600;
  line-height: 138%;
  color: ${({ theme }) => theme.color.white};

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 2.8rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.8rem;
  }
`;

const Line = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 138%;
  color: ${({ theme }) => theme.color.white};
  white-space: pre-wrap;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.media.tabletS} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 1.2rem;
  }
`;
