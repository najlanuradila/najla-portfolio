import React from "react";
import Work from "../Component/Work";
import Edu from "../Component/Education";
import { workDetails, eduDetails } from "../Detail";

function About() {
  return (
    <main className="bg-[#060D0F] flex flex-col lg:px-24 xl:px-48 px-5">
      <section>
        <h1 className="mt-20 text-2xl md:text-3xl xl:text-4xl xl:leading-tight  text-[#f5ab3b] font-bold ">
          About Me
        </h1>
        <p className=" text-content py-8 lg:max-w-3xl text-justify">
          With a Bachelor's degree in computer science and experience in
          creating and implementing software applications, as well as the
          ability to troubleshoot and resolve issues in a timely and accurate
          manner. 
          <br /><br />
          During my studies, I delved into programming and software
          development, gaining knowledge of various programming languages, web
          technologies, and best practices in software development. I
          successfully completed several software development projects,
          providing me with a profound understanding of the software development
          lifecycle. I am proficient in several programming languages, including
          Go, Python, JavaScript, C++, PHP, Java, and Dart. Additionally, I
          explored best practices in software development, including the use of
          frameworks such as Laravel, Flutter, and ReactJS.
        </p>
      </section>
      <section>
      <h1 className=" mt-5 text-2xl md:text-3xl xl:text-4xl xl:leading-tight  text-[#f5ab3b] font-bold ">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ University, Major, GPA, Duration }) => (
            <Edu
              university={University}
              major={Major}
              gpa={GPA}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
      <h1 className=" mt-10 text-2xl md:text-3xl xl:text-4xl xl:leading-tight  text-[#f5ab3b] font-bold ">
          Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
