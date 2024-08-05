import React, { useState } from 'react';
import '../App.css'; // Assuming you use this for general styling

function About() {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('skills');

    // Function to handle tab changes
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="user.png" alt="Alexander Hinanay" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Welcome to my portfolio! I’m Alexander M. Hinanay, a Computer Engineering graduate from Emilio Aguinaldo College Cavite. I blend creativity with technical skills to tackle problems and deliver excellent results. Explore my portfolio to see what I can do and how I can make an impact. Thanks for visiting!
                        </p>
                        <div className="tab-title">
                            <p 
                                className={`tab-link ${activeTab === 'skills' ? 'active-link' : ''}`} 
                                onClick={() => handleTabClick('skills')}
                            >
                                Skills
                            </p>
                            <p 
                                className={`tab-link ${activeTab === 'experience' ? 'active-link' : ''}`} 
                                onClick={() => handleTabClick('experience')}
                            >
                                Experience
                            </p>
                            <p 
                                className={`tab-link ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => handleTabClick('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>Programming Languages</span><br />Python, Java, HTML, CSS, JavaScript</li>
                                <li><span>Tools and Technologies</span><br />AutoCAD, SketchUp, Multisim, EMU8086, Cisco, Arduino IDE, Bootstrap, Visual Studio Code</li>
                                <li><span>Development Tools and Frameworks</span><br />Node.js, PHP, MySQL, Composer, Git, PHPUnit, Playwright, Laravel, GitHub repository</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>On-the-Job Training Intern</span><br />Integritech Builders Solutions Inc.<br />April 2024 - May 2024</li>
                                <li>Participated in company orientation and familiarized with policies and procedures.<br />
                                    Assisted in various administrative tasks, including organizing documents and data entry.<br />
                                    Developed skills in AutoCAD and Incode through hands-on tasks and projects.<br />
                                    Contributed to the preparation of detailed drawings and designs.<br />
                                    Participated in the MRSP meeting at the University of Perpetual Help Dalta, gaining insights into project discussions and stakeholder engagements.
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>Emilio Aguinaldo College Cavite</span><br />Bachelor of Science in Computer Engineering<br />2021 - 2024</li>
                                <li><span>Saint Jude Parish School</span><br />2019 - 2021</li>
                                <li><span>Trece Martires National High School</span><br />2017 - 2019</li>
                                <li><span>Indang National High School</span><br />2014 - 2017</li>
                                <li><span>Bagong Pook Elementary School</span><br />2008 - 2014</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
