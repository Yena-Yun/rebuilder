import { ObserverUIContainer } from '../ObserverUIContainer/ObserverUIContainer';
import translation from 'locales/en/sentences.json';

export const Section6 = () => {
  return (
    <ObserverUIContainer
      order={6}
      content={{
        head: translation.section6.head,
        body: translation.section6.body,
      }}
    />
  );
};
