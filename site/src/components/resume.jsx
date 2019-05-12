import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return(
      <div className="content">
        <p>This is just a summary of my skills and competences. If you're interested in a full CV, <a href="mailto:cacquani@mail.com">Contact me</a></p>
        <h2 className="divider">Profile</h2>
        <ul className="resume-list">
          <li>Motivated software developer with 16 year experience in programming and 10 year experience with Ruby.</li>
          <li>Enthusiast about problem solving and creative thinking.</li>
          <li>Fast learner and used to work in small teams, where the need to cover various roles has led to acquire an eclectic set of competences.</li>
          <li>Capable to analyse issues, elaborate solutions and organize short or long-term work plans, depending on the information at hand, ability acquired by working on development projects, through RPG and organizing small meeting and events among friends.</li>
          <li>Enthusiast about TDD and agile development, which in my opinion greatly improves the quality and reliability of delivered software.</li>
          <li>Able of starting from scrap and deliver working mock, even with scarce or confused requirements, in order to kick-start the conversation and refine the product through an iterative process.</li>
          <li>Capable of interacting positively with stakeholders in order to deliver and acquire information, ability learned working in a tax counselling centre and later as a trainee software analyst.</li>
          <li>Enthusiast about employing the right technology for the job, able to consider both technical and business reasons.</li>
          <li>Able to sustain a constructive discussion, motivate my opinion and choices with logical arguments and adapt when facts I hadn't considered are brought to the table.</li>
        </ul>

        <h3>Additional information:</h3>
        <ul className="resume-list">
          <li>Mother tongue Italian, proficient in English, basic understanding of written French.</li>
          <li>Category B driving license.</li>
        </ul>

        <h2 className="divider">Skills and competences</h2>

        <h3>Programming Languages and Frameworks:</h3>
        <ul className="resume-list">
          <li>Proficient in Ruby (RoR, Sinatra, Cuba, Rack), JavaScript (ES5, ES6, Node.js, Express, StimulusJS), HTML and CSS</li>
          <li>Working knowledge of React.js, Phaser.js, jQuery, Prototype, PHP.</li>
          <li>Intermediate knowledge of Java (with working knowledge of Grails and Groovy) bash scripting, Pascal, c, c++, c#, POSIX Regular Expressions.</li>
          <li>Intermediate knowledge of EmberJS and Angular frameworks, knowledge of the GraphQL paradigm and libraries.</li>
          <li>Basic knowledge of ActionScript2, Delphi, Python, Assembly, Basic, Scheme, PovRay.</li>
        </ul>

        <h3>Database and Related Languages:</h3>
        <ul className="resume-list">
          <li>Familiarity with ACID principles.</li>
          <li>Proficient in SQL, in particular PostgreSQL and PL/pgSQL.</li>
          <li>Intermediate knowledge of NoSQL (MongoDB) and MySQL.</li>
          <li>Knowledge of the basics of geographical databases.</li>
        </ul>

        <h3>Operating Systems and System Administration:</h3>
        <ul className="resume-list">
          <li>Ability to install and maintain Windows, Linux and MacOS X systems.</li>
          <li>Ability to install and configure Apache and NginX web servers.</li>
          <li>Ability to install and configure MySQL, PostgreSQL and MongoDB database servers.</li>
          <li>Basic knowledge of Docker, CloudFoundry deployment, Jenkins and CircleCI configuration</li>
        </ul>

        <h3>Software Tools and Packages:</h3>
        <ul className="resume-list">
          <li>Good knowledge of Vim editor and tmux. Operative knowledge of NetBeans IDE. Basic knowledge of Eclipse IDE, Atom and Sublime.</li>
          <li>Familiarity with version management principles, good knowledge of GIT and SVN.</li>
          <li>Intermediate knowledge of Microsoft Office and OpenOffice suites.</li>
          <li>Intermediate knowledge of Adobe Dreamweaver, Macromedia Flash, Adobe Photoshop, Adobe Illustrator, Gimp and Krita.</li>
          <li>Familiarity with Jira and Trello, including basic management of the tools settings.</li>
        </ul>

        <h3>Other competences</h3>
        <ul className="resume-list">
          <li>Operational knowledge of the Scrum agile framework (Scrum.org PSM I certificate with a score of 97%).</li>
          <li>Ability to interact with people with particular needs acquired working as swimming instructor in classes for people with disability.</li>
          <li>Teaching ability acquired working as swimming instructor and expanded as a volunteer tutor during the Rails Girls event.</li>
        </ul>

        <h2 className="divider">Interests and hobbies</h2>
        <ul className="resume-list">
          <li>Reading, amateur artistic drawing.</li>
          <li>Interest in martial arts, practised Yoseikan Budo for six years archiving a green belt.</li>
          <li>Good swimming abilities, knowledge of freestyle, backstroke and breaststroke forms, abilities applied in a part-time job as swimming instructor in classes for children and people with disability.</li>
          <li>Tabletop Role Playing Games and Live Action Role Playing.</li>
          <li>Currently studying Unreal Game Engine.</li>
        </ul>
      </div>
    )
  }
}

export default Resume;
