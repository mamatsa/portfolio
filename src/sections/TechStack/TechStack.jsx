import React from 'react';
import {
  ReactLogo,
  JSLogo,
  TSLogo,
  HTMLLogo,
  CSSLogo,
  NodeLogo,
  TailwindLogo,
  LinuxLogo,
  FigmaLogo,
  MongoLogo,
  VscodeLogo,
  ExpressLogo,
  GitLogo,
  GithubLogo,
  CypressLogo,
  SwaggerLogo,
} from 'src/assets';
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
          logo={HTMLLogo}
          link='https://developer.mozilla.org/en-US/docs/Web/HTML'
        />
        <StackItem
          title='CSS'
          logo={CSSLogo}
          link='https://developer.mozilla.org/en-US/docs/Web/CSS'
        />
        <StackItem
          title='JavaScript'
          logo={JSLogo}
          link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        />
        <StackItem
          title='TypeScript'
          logo={TSLogo}
          link='https://www.typescriptlang.org/'
        />
        <StackItem title='React' logo={ReactLogo} link='https://react.dev/' />
        <StackItem
          title='NodeJS'
          logo={NodeLogo}
          link='https://nodejs.org/en'
        />
        <StackItem
          title='Express'
          logo={ExpressLogo}
          link='https://expressjs.com/'
        />
        <StackItem
          title='MongoDB'
          logo={MongoLogo}
          link='https://www.mongodb.com/'
        />

        <StackItem
          title='TailwindCSS'
          logo={TailwindLogo}
          link='https://tailwindcss.com/'
        />
        <StackItem title='Git' logo={GitLogo} link='https://git-scm.com/' />
        <StackItem
          title='Github'
          logo={GithubLogo}
          link='https://github.com/'
        />
        <StackItem
          title='Linux'
          logo={LinuxLogo}
          link='https://www.linux.org/'
        />
        <StackItem
          title='VSCode'
          logo={VscodeLogo}
          link='https://code.visualstudio.com/'
        />
        <StackItem
          title='Figma'
          logo={FigmaLogo}
          link='https://www.figma.com/'
        />
        <StackItem
          title='Swagger'
          logo={SwaggerLogo}
          link='https://swagger.io/'
        />
        <StackItem
          title='Cypress'
          logo={CypressLogo}
          link='https://www.cypress.io/'
        />
      </div>
    </section>
  );
};

export default TechStack;
