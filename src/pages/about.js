import React from 'react';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/about.module.scss"

export default function about() {
    return (
        <Layout
            pageMeta={{
                title: "About | CCPT",
                description: "CCPT offers turnkey solutions for specialized power and control panel building.",
                canonical: "/about"
            }}
        >

            <Section headingBig="Who are We?">
                <div className={styles.story}>
                    <p>We are a young and dynamic company with years of experience
                    building specialized power and control panels.
                    <br />
                    CCPTECH was founded in 2018.</p>
                </div>
                <div className={styles.experience}>
                    <h5>
                        We have years of experience in:
                    </h5>
                    <ul>
                        <li>
                            <i className="icon-square"></i>
                            HVAC controls and electrical
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Systems Integration
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Process Automation
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Factory Automation
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Electrical Maintenance and Instrument Installation.
                        </li>
                    </ul>
                </div>
            </Section>

            <LinkBlock
                linkTo="/services"
                linkText="View Our Services"
                dark="true"
            >
                We build control panels and offer turnkey projects in all industries.
            </LinkBlock>

            <Section headingBig="Our Team">
                <div className={styles.teamContainer}>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamImage}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.teamText}>
                            <h2><span>Casper</span> Ncube</h2>
                            <h5>Electrical Engineer</h5>
                            <p>
                                Member of Engineers Australia as well as South African Institute of Electrical Engineers.
                                <span></span>
                                5 Years experience in Power and control engineering systems as well as Clinical instrumentation.
                                <span></span>
                                Responsible for Project management, system design, Panel Building including design, procurement, consultation, testing, installation and commissioning. PLC Programming and System commissioning.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <LinkBlock
                linkTo="/contact"
                linkText="Contact Us"
            >
                Looking for experienced engineers for your next control panel project?
            </LinkBlock>
        </Layout>
    )
}
