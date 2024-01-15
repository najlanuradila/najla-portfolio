import React from "react";
import { techStackDetails } from "../Detail";

function Skill() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    netlify,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    php,
    c,
    go,
    java,
    dart, 
    laravel,
    flutter,
    python,
    xampp,
    codeblocks,
  } = techStackDetails;
  return (
    <main className="bg-[#060D0F] flex flex-col lg:px-24 xl:px-48 px-5">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Language and Framework
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={php} title="PHP" alt="" />
        <img src={c} title="C++" alt="" />
        <img src={go} title="Go" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={dart} title="Dart" alt="" />
        <img src={flutter} title="Flutter" alt="" />
        <img src={laravel} title="Laravel" alt="" />
        <img src={python} title="Python" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={xampp} title="XAMPP" alt="Postman" />
        <img src={codeblocks} title="Codeblocks" alt="" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={netlify} title="Netlify" alt="" />
      </section>
    </main>
  );
}

export default Skill;
