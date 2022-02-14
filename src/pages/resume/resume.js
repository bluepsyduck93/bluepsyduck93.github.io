import React from 'react'
import './resume.scss'
import CompanyInfo from "../../components/companyInfo/companyInfo";
import ResumeCard from "../../components/resumeCard/resumeCard";
import BrandInspectorSite from '../../assets/brandinspector.png'
import BRQCSite from '../../assets/brqc.png'
import BRQCWireframe from '../../assets/wireframe.png'
import JandJLogo from '../../assets/jandj.jpeg'
import PCMillerSite from '../../assets/pcmiller.png'
import SingleSearchSite from '../../assets/singlesearch.png'
import TrimbleLogo from '../../assets/trimble.jpeg'
import UMPSite from '../../assets/ump.png'

export default  function Resume() {
    return(
        <div className="resume-container">
            <h1>Resume</h1>
          <section id="jandj-resume">
                  <div>
                          <CompanyInfo
                              name={"Johnson and Johnson"}
                              image={JandJLogo}
                              location={"Raritan, NJ"}
                              jobTitle={"Software Engineering Developer"}
                              team={"Web and Mobile Applications Team"}
                              dates={"July 2020 - Current"}
                          />
                  </div>
                  <div className="resume-card-container">
                          <ResumeCard
                              name={"Brand Inspector"}
                              image={BrandInspectorSite}
                              description={"A survey site that helps a user gather survey data, and maintain quality assurance on flagship products"}
                              technology={"Web Components, Node, Express, Javascript"}
                          />
                          <ResumeCard
                              name={"Digital Surgery Enablement Platform - User Management Portal"}
                              image={UMPSite}
                              description={"An authentication site that allows hospital managers to register surgeons on the Digital Surgery Platform, allowing them to perform surgeries on the J and J Medical Devices"}
                              technology={"ReactJS, StoryBook, REST APIs"}
                          />
                          <ResumeCard
                              name={"Bio Research and Quality Compliance Innovative Quality"}
                              image={BRQCSite}
                              description={"React data-analytics site that helps users understand the J and J Audit Process, and allows them to analyze Audits that they have permission to"}
                              technology={"ReactJS, GraphQL"}
                          />
                          <ResumeCard
                              name={"Bio Research and Quality Compliance Innovative Quality"}
                              image={BRQCWireframe}
                          />
                  </div>
          </section>
          <section id="trimble-resume">
                  <div>
                          <CompanyInfo
                              name={"Trimble Maps"}
                              image={TrimbleLogo}
                              location={"Princeton, NJ"}
                              jobTitle={"Software Engineering Intern"}
                              team={"Server and Web Applications Team"}
                              dates={"April 2019 - September 2019"}
                          />
                  </div>
                  <div className="resume-card-container">
                          <ResumeCard
                              name={"PC*Miler Web"}
                              image={PCMillerSite}
                              description={""}
                              technology={"AngularJS, REST APIs"}
                          />
                          <ResumeCard
                              name={"Place Editor"}
                              image={""}
                              description={""}
                              technology={"AngularJS, REST APIs, JWT"}
                          />
                          <ResumeCard
                              name={"Single Search"}
                              image={SingleSearchSite}
                              description={""}
                              technology={"Angular2+, REST APIs"}
                          />
                  </div>

          </section>

        </div>
    )
}