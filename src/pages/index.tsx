import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SocialLink from '../components/socialLink';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faBitbucket} from '@fortawesome/free-brands-svg-icons/faBitbucket'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter'
import {faCloudDownload} from "@fortawesome/free-solid-svg-icons/faCloudDownload";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {dom} from "@fortawesome/fontawesome-svg-core";
import Specialization from '../components/specialization';
import CvEntry from "../components/cvEntry";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>$&gt; whois mrhanlon</title>
                <style>{dom.css()}</style>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <code>$&gt; whois mrhanlon</code>
                </h1>

                <p className={styles.description}>
                    Hi, I&apos;m Matt! I&apos;m a software developer living in Austin. For over a
                    decade I have developed data intensive applications and APIs for uses
                    ranging from enabling supercomputing with a smartphone to sentiment
                    analysis of millions of social network messages a day.
                </p>

                <div className={styles.social_links}>
                    <SocialLink title={'Github'} icon={faGithub}
                                href={'//github.com/mrhanlon'}/>
                    <SocialLink title={'Bitbucket'} icon={faBitbucket}
                                href={'//bitbucket.org/mrhanlon'}/>
                    <SocialLink title={'LinkedIn'} icon={faLinkedin}
                                href={'//linkedin.com/in/mrhanlon'}/>
                    <SocialLink title={'Twitter'} icon={faTwitter}
                                href={'//twitter.com/mattorantimatt'}/>
                </div>

                <h2>
                    <a href={'files/mrhanlon_cv.pdf'} title={'Download my CV'}>
                        Curriculum Vitae
                        &nbsp;
                        <FontAwesomeIcon icon={faCloudDownload}/>
                    </a>
                </h2>

                <h3>Current Position</h3>
                <CvEntry>
                    <span>Principal Software Engineer, Zitti, Inc.</span>
                </CvEntry>

                <h3>Areas of specialization</h3>
                <Specialization
                    areas={[
                        'Web Applications',
                        'APIs',
                        'Full Stack Development',
                        'JavaScript',
                        'TypeScript',
                        'Ruby',
                        'Java',
                        'Python',
                        'React',
                        'Rails',
                        'Node.js',
                        'Django',
                        'MySQL',
                        'PostgreSQL',
                    ]}
                />

                <h3>Work experience</h3>
                <CvEntry year={2022} endYear={'present'}>
                    <span>Zitti, Inc.</span>
                </CvEntry>
                <CvEntry year={2019} endYear={2022}>
                    <span>SchoolAdmin, Austin, TX</span>
                </CvEntry>
                <CvEntry year={2016} endYear={2019}>
                    <span>Oracle Social Cloud, Oracle, Inc., Austin, TX</span>
                </CvEntry>
                <CvEntry year={2010} endYear={2016}>
                    <span>Texas Advanced Computing Center, The University of Texas at Austin, Austin, TX</span>
                </CvEntry>
                <CvEntry year={2007} endYear={2010}>
                    <span>Alliance Communications Management, Mobile, AL</span>
                </CvEntry>

                <h3>Education</h3>
                <CvEntry year={2009}>
                    <span>MS in Computer Science, The University of South Alabama, Mobile, Alabama</span>
                </CvEntry>
                <CvEntry year={2003}>
                    <span>BS in Mathematics, Spring Hill College, Mobile, Alabama</span>
                </CvEntry>

                <h3>Honors &amp; awards</h3>
                <CvEntry year={2010} endYear={2011}>
                    <span>Outstanding Master’s Thesis, University of South Alabama</span>
                </CvEntry>
                <CvEntry year={2008}>
                    <span>Outstanding Graduate Student, University of South Alabama</span>
                </CvEntry>
                <CvEntry year={2008}>
                    <span>CIS Graduate Fellowship, University of South Alabama</span>
                </CvEntry>
                <CvEntry year={2003}>
                    <span>President&apos;s Honors, Mathematics, Spring Hill College</span>
                </CvEntry>
                <CvEntry year={2003}>
                    <span>Hutchinson Award, Philosophy, Spring Hill College</span>
                </CvEntry>

                <h3>Selected publications &amp; talks</h3>
                <h4>Journal articles</h4>
                <CvEntry year={2014}>
                    <span>
                        R. Dooley, M. Hanlon,
                        &#8220;Recipes 2.0: Building for Today and Tomorrow&#8221;.
                        [Special issue] <i>Concurrency and Computation: Practice and Experience</i>.
                        {' '}
                        <a href={'//dx.doi.org/10.1002/cpe.3285'}>doi:10.1002/cpe.3285</a>.
                    </span>
                </CvEntry>
                <CvEntry year={2014}>
                    <span>
                        M. Hanlon, W. Smith, S. Mock,
                        &#8220;Providing resource information to users of a national computing center&#8221;.
                        [Special issue] <i>Concurrency and Computation: Practice and Experience</i>.
                        {' '}
                        <a href={'//dx.doi.org/10.1002/cpe.3233'}>doi:10.1002/cpe.3233</a>.
                    </span>
                </CvEntry>

                <h4>Conference proceedings</h4>
                <CvEntry year={2017}>
                    <span>
                        M. Hanlon, et al.,
                        &#8220;Securing HPC: Development of a Low Cost, Open Source Multi-factor Authentication Infrastructure&#8221;.
                        Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis. SC &apos;17.
                    </span>
                </CvEntry>
                <CvEntry year={2014}>
                    <span>
                        M. Hanlon, et al.,
                        &#8220;The Arabidopsis Information Portal: An Application Platform for Data Discovery&#8221;.
                        Proceedings of the 9th Gateway Computing Environments Workshop.
                    </span>
                </CvEntry>
                <CvEntry year={2011}>
                    <span>
                        M. Hanlon, et al.,
                        &#8220;Benefits of NoSQL databases for portals &amp; science gateways&#8221;.
                        Proceedings of the TeraGrid Conference: Extreme Digital Discovery.
                    </span>
                </CvEntry>
                <CvEntry year={2010}>
                    <span>
                        M. Hanlon, et al.,
                        &#8220;My-Plant.org: A phylogenetically structured social network&#8221;.
                        Gateway Computing Environments Workshop (GCE).
                    </span>

                </CvEntry>

                <h4>Presentations</h4>
                <CvEntry year={2014}>
                    <span>
                        &#8220;Discovering and using Araport Data APIs in Araport Science Apps&#8221;.
                        The First Araport Developers Conference, TACC, Austin, TX, USA.
                        {' '}
                        <a href={'//github.com/Arabidopsis-Information-Portal/workshop-tutorial-app/blob/tutorial/3/TUTORIAL.md'}>Tutorial</a>.
                    </span>
                </CvEntry>

                <CvEntry year={2014}>
                    <span>
                        &#8220;Project Management and Automation: Using Maven and Grunt to accelerate development&#8221;.
                        Software Engineering Assembly Conference, UCAR, Boulder, CO, USA. Slides:
                        {' '}
                        <a href='//mrhanlon.com/slides/sea2014'>HTML5</a>,
                        {' '}
                        <a href='//www.slideshare.net/mrhanlon/project-management-and-automation'>PDF</a>,
                        {' '}
                        <a href='//github.com/mrhanlon/sea2014-demo'>Demo code</a>
                    </span>
                </CvEntry>

                <CvEntry year={2014}>
                    <span>
                        &#8220;Federated Authentication in a Campus System&#8221;.
                        Liferay .edu User Group. Webcast. Slides:
                        {' '}
                        <a href='//www.slideshare.net/mrhanlon/federated-authe'>PDF</a>
                    </span>
                </CvEntry>

                <CvEntry year={2013}>
                    <span>
                        &#8220;Using Liferay as a platform for Computational Science&#8221;. Liferay North American Symposium, San Francisco, USA.
                    </span>
                </CvEntry>

                <CvEntry year={2013}>
                    <span>
                        &#8220;Introduction to Science Gateways Workshop&#8221;.
                        Elizabeth City State University, North Carolina, USA.
                        {' '}
                        <a href='//bitbucket.org/taccaci/gateway-dna-tutorial'>Demo code</a>
                    </span>
                </CvEntry>

                <h3>Open source software contributions</h3>
                <CvEntry>
                    <span>
                        <a href='//atom.io/packages/less-than-slash'>Less Than-Slash</a>
                        {' '}
                        - A package for the
                        {' '}
                        <a href='/Users/mrhanlon/Projects/mrhanlon.com/src/pages'>Atom Editor</a>
                        {' '}
                        that closes open markup tags when you type
                        {' '}
                        <code>&lt;/</code>.
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//www.npmjs.org/package/commnq'>CommnQ</a>
                        {' '}
                        - An AMQP library for Node.js with conveniences for running multiple tasks on AMQP messages.
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//github.com/Arabidopsis-Information-Portal'>Arabidopsis Information Portal</a>
                        {' '}
                        - Various projects developed for the Arabidopsis Information Portal.
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//github.com/ChameleonCloud'>Chameleon</a>
                        {' '}
                        - Various development as part of the Chameleon Cloud Testbed.
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//github.com/iPlantCollaborativeOpenSource'>iPlant Collaborative</a>
                        {' '}
                        - Various projects developed by the iPlant Collaborative.
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//github.com/jknack/handlebars.java'>Handlebars.java</a>
                        {' '}
                        - Logic-less and semantic Mustache templates with Java
                    </span>
                </CvEntry>


                <CvEntry>
                    <span>
                        <a href='//github.com/stanlemon/jGrowl'>jGrowl</a>
                        {' '}
                        - An unobtrusive notification system for web applications.
                    </span>
                </CvEntry>


                <h3>Volunteering</h3>
                <CvEntry year={2014}>
                    <span>
                        <a href='//austingivecamp.org'>Austin GiveCamp 2014</a>
                        {' '}
                        - Part of a hackathon team to develop a Flask web app for
                        {' '}
                        <a href='/Users/mrhanlon/Projects/mrhanlon.com/src/pages'>The Ghisallo Foundation&apos;s</a>
                        {' '}
                        <a href='/Users/mrhanlon/Projects/mrhanlon.com/src/pages'>Cycle Academy</a>
                        {' '}
                        project.
                    </span>
                </CvEntry>

                <h3>Hobbies</h3>
                <p>Running, Swimming, Triathlon, Cooking, Science Fiction</p>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    );
};

export default Home;
