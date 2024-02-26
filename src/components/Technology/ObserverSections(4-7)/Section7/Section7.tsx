import { ObserverUIContainer } from '../ObserverUIContainer/ObserverUIContainer';
import translation from 'locales/en/sentences.json';

export const Section7 = () => {
  return (
    <ObserverUIContainer
      videoSource='pc/tech_video5_pc'
      order={7}
      content={{
        head: translation.section7.head,
        body: translation.section7.body,
      }}
      hasBackground
    />
  );
};
