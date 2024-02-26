import { ObserverUIContainer } from '../ObserverUIContainer/ObserverUIContainer';
import translation from 'locales/en/sentences.json';

export const Section5 = () => {
  return (
    <ObserverUIContainer
      videoSource='pc/tech_video3_pc'
      order={5}
      content={{
        head: translation.section5.head,
        body: translation.section5.body,
      }}
    />
  );
};
