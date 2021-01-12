import React, { useState, useEffect } from "react";
import { Parallax, Background } from 'react-parallax';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ScrollTrigger from 'react-scroll-trigger';

import styles from "./styles.module.css";
import useStyles from "../css/styles.js"
import Payments from './Animations/Payments';
import Logistic from './Animations/Logistic';
import Games from './Animations/Games';

const Industries = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const classes = useStyles()
  const [expanded, setExpanded] = useState();
  const [stateAnimation,setStateAnimation] = useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    handleChange('panel_AssetManagementy')
  }, []);

  const handleScrollEnter = () => {
    setStateAnimation(true)
  }

  const handleScrollExit = () => {
    setStateAnimation(false)
  }

  const HeroSection = () => {
    return (
      <Box className={"containerSec"}>
        {!isMobile && 
          <Box className={"sectionHero"}>
          <Box className={"titleBox"}>
            <h1 >Blockchain Solutions</h1>
            <h1 >by Industry</h1>
          </Box>
          <p >
            Organizations and companies in many industries deploy blockchain
            technology to solve significant problems and improve their
            operations. These are some use cases of enterprise blockchain in
            different sectors, such as financial, supply chain, gaming, and
            healthcare.
          </p>
          <Box className={"buttonBox"}>
            <button className={"buttonPrimary"} href={useBaseUrl("/contact-us")}>
              Contact us
            </button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className={"sectionHeroMobile"}>
            <Box className={"logoMobileBox"}>
              <img
                  className={"logoMobile"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
            </Box>
          <Box className={"titleBox"}>
            <h1 >Blockchain Solutions</h1>
            <h1 >by Industry</h1>
          </Box>
          <p >
            Organizations and companies in many industries deploy blockchain
            technology to solve significant problems and improve their
            operations. These are some use cases of enterprise blockchain in
            different sectors, such as financial, supply chain, gaming, and
            healthcare.
          </p>
          <Box className={"buttonBoxMobile"}>
            <button className={"buttonPrimary"} href={useBaseUrl("/contact-us")}>
              Contact us
            </button>
          </Box>
        </Box>
      }
      </Box>
    )
  }

  const PrincipalIndustries = () => {
    return (
      <Box className={"containerSec"}>
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
        <br/>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
                <Box className={"imgBox"}>
                  <Payments state={stateAnimation}/>
                </Box>
              </ScrollTrigger>
            </Grid>
            <Grid item xs={12} md={8}>
              <h2 style={{lineHeight: '26px'}}>Blockchain</h2>
              <h2 style={{lineHeight: '26px'}}>Development</h2>
              <h2 style={{lineHeight: '26px'}}>Services</h2>
                <p style={{marginTop: '30px'}}>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing with encryption to reduce data breaches.
                  Blockchain may also promote alternate financial applications,
                  such as new liquidity solutions and microloans management, and
                  improved payment structures.
                </p>
                <br/>
                <a className={classes.a} target="_blank">
                  Read More
                </a>
            </Grid>
            <Grid style={{marginTop:'50px'}} item xs={12} md={4}>
              <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
                <Box className={"imgBox"}>
                  <Logistic state={stateAnimation}/>
                </Box>
              </ScrollTrigger>
            </Grid>
            <Grid style={{marginTop:'50px'}} item xs={12} md={8}>
              <h2 style={{lineHeight: '26px'}}>Logistics and</h2>
              <h2 style={{lineHeight: '26px'}}>supply chain</h2>
              <p style={{marginTop: '30px'}}>
                In an industry that involves dozens of stakeholders, the
                capabilities of blockchain and smart contracts for traceability,
                authorizations management, and automation can make a great ally.
                Blockchain can integrate different technologies, such as IoT and
                AI, to create comprehensive solutions and streamline processes
                in the logistics and supply chain industry.
              </p>
              <br/>
              <a target="_blank">
                Read More
              </a>
            </Grid>
            <Grid style={{marginTop:'-40px'}} item xs={12} md={4}>
              <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
                <Box className={"imgBox"}>
                  <Games state={stateAnimation}/>
                </Box>
              </ScrollTrigger>
            </Grid>
            <Grid style={{paddingTop:'110px'}} item xs={12} md={8}>
              <h2 style={{lineHeight: '26px'}}>Gaming and</h2>
              <h2 style={{lineHeight: '26px'}}>Esports</h2>
              <p style={{marginTop: '30px'}}>
                The gaming industry is booming—nearly 40% of the total world's
                population play video games. Blockchain enables a better way to
                transfer, valorize, and collect digital in-game assets. Its
                capabilities to increase security and offer a more efficient way
                for transactions can level-up online gaming.
              </p>
              <br/>
              <a className={classes.a} target="_blank">
                Read More
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const BlockchainMoreIndustries = () => {
    return (
      <Box className={"containerSec"}>
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
          <br/>
          <br/>
          <br/>
          <br/>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <h2>Blockchain in More Industries</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion 
                square
                expanded={expanded === 'panel_AssetManagementy'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_AssetManagementy')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'0px'}}>Asset Managementy</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Blockchain technology enables an immutable and secure way to
                    tokenize and manage tangible and intangible assets. Some
                    opportunities include innovative liquidity options and reduced
                    management costs.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion 
                square
                expanded={expanded === 'panel_Decentralized'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_Decentralized')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Decentralized Finance</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Also known as DeFi, decentralized finance leverages blockchain
                    technology to explore new liquidity opportunities for
                    citizens. Our team is part of evodex, an open-source DeFi app.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion 
                square
                expanded={expanded === 'panel_Identity'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_Identity')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Digital Identity</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Blockchain allows an immutable, transparent, and secure system
                    to manage digital identities that can interconnect with IoT,
                    biometrics, and enterprise management systems.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === 'panel_Energy'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_Energy')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Energy</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Blockchain offers an efficient and transparent way to improve
                    the operations, distribution, and data management for energy
                    companies. Decentralized networks may help promote sustainable
                    and private energy generation alternatives.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Tech'} style={{boxShadow:'none'}} onChange={handleChange('panel_Tech')} className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Legal Tech</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Smart contracts are computer codes that can execute
                    automatically and autonomously according to the contract
                    terms. These may transform legal processes by adding
                    transparency, efficiency, and immutable registries.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion
                square
                expanded={expanded === 'panel_Government'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_Government')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Government</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Government institutions can deploy blockchain technology to
                    leverage its transparency and immutability features to
                    increase trust between the public sector and the citizens. It
                    also allows a cost-efficient way to register data and
                    accountability.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Entertainment'} style={{boxShadow:'none'}} onChange={handleChange('panel_Entertainment')} className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Media and Entertainment</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    The blockchain’s capabilities to securely and immutably store
                    registries can help reduce piracy and disputes. Also,
                    blockchain can protect IP and improve traceability of payments
                    and content distribution.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === 'panel_Insurance'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_Insurance')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Healthcare and Insurance</Typography>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Blockchain technology offers improved efficiency,
                    traceability, and security to store medical and other
                    sensitive data from patients. Smart contracts help reduce
                    costs for insurance claims processing.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion 
                square
                expanded={expanded === 'panel_RealEstate'}
                style={{boxShadow:'none'}}
                onChange={handleChange('panel_RealEstate')}
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Real Estate</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Leverage real estate investments with blockchain technology by
                    creating new business models. Blockchain helps integrate
                    digital assets for liquidity and streamline investor relations
                    and portfolio management.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion 
                square 
                expanded={expanded === 'panel_Sports'} 
                style={{boxShadow:'none'}} 
                onChange={handleChange('panel_Sports')} 
                className={"accordion"} >
                <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <h3 style={{margin:'1px'}}>Sports</h3>
                </AccordionSummary>
                <AccordionDetails style={{padding:0}}>
                  <p>
                    Blockchain in sports offers a great way to increase fan
                    engagement, promote active participation in decision-making,
                    and monetize through new streams such as player content and
                    collectibles.
                  </p>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const ChoosingEnterprise = () => {
    return (
      <Box className={"containerSec"}>
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
          <Box className={"titleBox"}>
            <h2>
              Choosing an Enterprise Blockchain
            </h2>
          </Box>
            <p>
              There are several enterprise blockchain platforms in the market
              with different characteristics and capabilities. The following is
              a list of some key features you must consider when choosing what
              blockchain platform is the most suitable for your organization:
            </p>
          <Box >
            <Grid style={{justifyContent:'center'}} container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Privacy and transparency</h3>
                </Box>
                <p>
                  How are the blockchain’s security and confidentiality
                  protocols different from others’, and how does it handle
                  transparency?
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Cost-efficiency</h3>
                </Box>
                <p>
                  Would the organization see a significant reduction in costs
                  by integrating smart contracts or simplifying the data
                  sharing process?
                </p>
              </Grid>
            </Grid>
            <Grid style={{justifyContent:'center'}} container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Quick adoption</h3>
                </Box>
                <p>
                  Can your team use their experience with programming
                  languages, or do they need to learn a new one?
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Speed or throughput</h3>
                </Box>
                <p>
                  How quickly does your solution need to be? Are you a
                  high-frequency trading company, or can you afford longer
                  block confirmation times?
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className={styles.btnBox}>
            <button 
              className={"buttonPrimary"}
              href={useBaseUrl("/contact-us")}>
                Contact us
            </button>
          </Box>
        </Box>
      </Box>
    )
  }

  const AdditionalResources = () => {
    return (
      <Box className={classes.containerGray}>
        <Box className={classes.sectionPadding}>
          <Box className={"titleBox"}>
            <h2>Additional Resources</h2>
          </Box>
          <p>
            Find more interesting reads and resources to continue learning
            about enterprise blockchain and EOSIO.
          </p>
          <br></br>
          <Box className={styles.colBox}>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/blog.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/blog.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/press.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/press.webp")}
              />
            </picture>
          </Box>
          <Box className={styles.colBox}>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/portal.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/portal.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/github.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/github.webp")}
              />
            </picture>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Layout>
      <Box className={classes.mainContainer}>
        {!isMobile && 
          <Parallax strength={800}>
            <Background className={classes.bgParallax}>
                <Box className={classes.imgParallax} />
            </Background>
            <HeroSection />
            <PrincipalIndustries />
          </Parallax>
        }
        {isMobile && 
          <>
            <HeroSection />
            <PrincipalIndustries />
          </>
        }
        
        {!isMobile &&
          <>
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
          </>
        }
        {isMobile && 
          <>
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
          </>
        } 
      </Box>
    </Layout>
  );
};

export default Industries;
