import React from "react";
import { groupDetails, projectDetails } from "../Detail";
import Project from "../Component/Project";

function Projects() {
  return (
    <main className="bg-[#060D0F] flex flex-col lg:px-24 xl:px-48 px-5 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Personal Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 ">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, description, techstack, image, feature, deploy, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  feature={feature}
                  deploy={deploy}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading mt-10 dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Group Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            groupDetails.map(
              ({ title, description, techstack, image, feature, deploy, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  feature={feature}
                  deploy={deploy}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
