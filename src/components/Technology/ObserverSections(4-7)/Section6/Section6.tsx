import { ObserverUIContainer } from '../ObserverUIContainer/ObserverUIContainer';
import translation from 'locales/en/sentences.json';

export const Section6 = () => {
  return (
    <ObserverUIContainer
      videoSource='pc/tech_video4_pc'
      order={6}
      content={{
        head: translation.section6.head,
        body: translation.section6.body,
      }}
    />
  );
};
