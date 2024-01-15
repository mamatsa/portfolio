import React from 'react';
import { SectionTitle } from 'src/components';
import { StackItem } from './components';
import { useTranslation } from 'react-i18next';

const TechStack = ({ techStackRef }) => {
  const { t } = useTranslation();
  return (
    <section
      id='tech-stack'
      className='flex flex-col justify-start items-center'
      ref={techStackRef}
    >
      <SectionTitle
        title={t('techStack.title')}
        description={t('techStack.description')}
      />

      <div className='flex flex-wrap justify-center items-center gap-6'>
        <StackItem
          title='HTML'
          logo='/assets/logos/html-logo.webp'
          link='https://developer.mozilla.org/en-US/docs/Web/HTML'
        />
        <StackItem
          title='CSS'
          logo='/assets/logos/css-logo.webp'
          link='https://developer.mozilla.org/en-US/docs/Web/CSS'
        />
        <StackItem
          title='JavaScript'
          logo='/assets/logos/js-logo.webp'
          link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        />
        <StackItem
          title='TypeScript'
          logo='/assets/logos/ts-logo.webp'
          link='https://www.typescriptlang.org/'
        />
        <StackItem
          title='React'
          logo='/assets/logos/react-logo.webp'
          link='https://react.dev/'
        />
        <StackItem
          title='Next.js'
          logo='/assets/logos/next-js.svg'
          link='https://nextjs.org/'
        />
        <StackItem
          title='NodeJS'
          logo='/assets/logos/node-logo.webp'
          link='https://nodejs.org/en'
        />
        <StackItem
          title='Express'
          logo='/assets/logos/express-logo.webp'
          link='https://expressjs.com/'
        />
        <StackItem
          title='MongoDB'
          logo='/assets/logos/mongo-logo.webp'
          link='https://www.mongodb.com/'
        />

        <StackItem
          title='TailwindCSS'
          logo='/assets/logos/tailwind-logo.webp'
          link='https://tailwindcss.com/'
        />
        <StackItem
          title='Git'
          logo='/assets/logos/git-logo.webp'
          link='https://git-scm.com/'
        />
        <StackItem
          title='Github'
          logo='/assets/logos/github-logo.webp'
          link='https://github.com/'
        />
        <StackItem
          title='Linux'
          logo='/assets/logos/linux-logo.webp'
          link='https://www.linux.org/'
        />
        <StackItem
          title='VSCode'
          logo='/assets/logos/vscode-logo.webp'
          link='https://code.visualstudio.com/'
        />
        <StackItem
          title='Figma'
          logo='/assets/logos/figma-logo.webp'
          link='https://www.figma.com/'
        />
        <StackItem
          title='Swagger'
          logo='/assets/logos/swagger-logo.webp'
          link='https://swagger.io/'
        />
        <StackItem
          title='Cypress'
          logo='/assets/logos/cypress-logo.webp'
          link='https://www.cypress.io/'
        />
      </div>
    </section>
  );
};

export default TechStack;
