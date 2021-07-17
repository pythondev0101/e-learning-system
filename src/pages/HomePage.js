import './HomePage.css';
import React from "react";
import { Link } from 'react-router-dom';
import BranchesSection from './BranchesSection';
import Footer from '../components/Footer';



const underMaintenance = require('../assets/images/under_maintenance.png');
// Prime Assets

const actual_class_1 = require('../assets/prime_assets/actual_class_1.jpg');
const departure_1 = require('../assets/prime_assets/departure_1.jpg');
const graduation_1 = require('../assets/prime_assets/graduation_1.jpg');
const orientation_1 = require('../assets/prime_assets/orientation_1.jpg');
const proof_of_gallery  = require('../assets/prime_assets/proof_of_gallery.jpg');
const skill_test = require('../assets/prime_assets/skill_test_1.jpg');

    

const HomePage = () => {
    
    return (
        <> 
        <div className=''>

        {/* Banner */}
        <div class="header-background pb-5 pt-5 text-white">
        <div class="container pb-5 pt-5">

        <div data-aos="fade-up" class="align-items-center row">
                    <div class="col-lg-6 pb-3 pt-3">
                        <h1 class="h1 text-white font-primary">Prime Language and Tech. Center Inc.</h1>
                        <p class="font-weight-light lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat sem ac elit rutrum rhoncus. </p>
                        <Link to='/pre-register'>
                            <a class="btn btn-outline-light pl-4 pr-4 rounded-pill">Pre-register</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* End Banner */}


        {/* About Section */}
        <div class="about border border-left-0 border-right-0 border-top-0 pb-5 pt-5 text-center" id="about">
        <div class="container pb-5 pt-5">
            <div class="row">
                <div class="col-lg-12 ml-auto mr-auto">
                    <h1 data-aos="zoom-in">WELCOME TO PRIME KOREAN LANGUAGE AND REVIEW CENTER INC.</h1>
                    <p data-aos="zoom-in-up" data-aos-duration="3000" class="mb-4">
                        IT'S GREAT TO MEET YOU HERE!

                        I WANT TO WELCOME EVERYONE ON THIS SITE

                        BECAUSE YOU WANT TO PREPARE FOR YOUR FUTURE, KNOWING OTHER LANGUAGE AND APPRECIATING OTHER CULTURES, THESE ARE THE SKILLS THAT LAST A LIFETIME.
                        WHETHER YOUR INTEREST IS WORLD AFFAIRS LIKE KDRAMAS OR KPOPS, TECHNOLOGY, BUSINESS, FACTORY WORKS OR JUST BROADENING YOUR MIND IN LEARNING KOREAN LANGUAGE WE WILL LEAVE WITH KNOWLEDGE AND UNDERSTANDING THAT COULD PROBABLY HELP YOU A LOT.
                        SO IF YOU'RE LOOKING FOR AN EASY SECOND LANGUAGE TO LEARN, YOU ARE ON THE RIGHT TRACK, PRIME LTCI IS OFFERING THE BEST SERVICE FOR THOSE INTERESTED TO LEARN “HANGUL”. LEARNING KOREAN LANGUAGE GIVES YOU ACCESS TO A WONDERFULLY AMAZING AND INTERESTING GROUP OF INDIVIDUALS, SOUTH KOREA IS GENERALLY REGARD AS SOME OF THE MOST TECHNOLOGICALLY WELL ADJUSTED PEOPLE IN THE WORLD.

                        PRIME KOREAN LANGUAGE AND REVIEW CENTER OFFERS A LOT OF SERVICES LIKE LEARNING HOW TO SPEAK KOREAN AS FLUENT AS THE NATIVE KOREANS, IMPROVING YOUR LISTENING SKILLS, WRITING AND READING, WE ARE ALSO ASSISTING FILIPINO’S TO PASS THE EPS-TOPIK EXAM FOR THOSE WHO WANTS TO WORK IN SOUTH KOREA AS FACTORY WORKERS. WE ARE HELPING FILIPINOS TO ACHIEVE THEIR DREAMS AND FULLFILL THEIR GOALS TO LIFT UP THE STATUS OF THEIR LIVING.
                        WE WANT TO HELP YOU GUYS SEEING AND HAVING A PROGRESSIVE FUTURE WITH US 
                        LEARN KOREAN LANGUAGE WITH US!!!!
 
                        </p>
                        <h5 data-aos="zoom-in-up" data-aos-duration="4000" class="h5 mb-4 text-dark">WELCOME to our TEAM
                        </h5>
                    <Link to='/about-us'>
                        <a data-aos="zoom-in" data-aos-duration="2000" class="btn btn-danger pl-4 pr-4 rounded-pill" href="#">Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
        </div>

        {/* End Of About Section */}

        {/* Testimonies Section */}
        <div data-aos="zoom-in" class="bg-light border border-left-0 border-right-0 border-top-0 pb-5 pt-5" id="testimonies">
            <div class="testimony container pb-5 pt-5">
            <h2 class="h1 mb-5 text-center">Our Testimonies</h2>
            <div class="align-items-center row">
            <div class="col-lg-4 pb-3 pt-3">
                <img src={proof_of_gallery.default} width="1188.238" height="500.402" viewBox="0 0 1188.238 884.402" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div data-aos="fade-right" class="col-lg-6 pb-3 pt-3">
                    <div class="pb-3 pt-3">
                        <h3 class="text-primary">Proof of Gallery</h3>
                        <p class="font-weight-light mb-0">
                            Prime KLC students who have gone KOREAN LANGUAGE TRAINING have passed the EPS-TOPIK exam 
                            and got hired by Korean employers. PRIME KLC is assisting Filipinos who are interested to
                            work as factory workers in SOUTH KOREA. 
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" class="align-items-center row">
            <div class="col-lg-4 offset-lg-2 pb-3 pt-3">
                <img src={orientation_1.default} width="1154.563" height="500.865"
                    viewBox="0 0 1154.563 886.865" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div class="col-lg-6 pb-3 pt-3">
                <div class="pb-3 pt-3">
                    <h3 class="text-primary">Orientation</h3>
                    <p class="font-weight-light mb-0">
                    Orientation is conducted as the first step, for those interested applicants they must undergo an orientation 
                    to know the step by step process. Schedule of orientation is conducted regularly at least 2 times a week in different branches. 
                    Clients who are interested with this program must send the personal 
                    details Before attending the orientation to know the nearest branch where they can join the said 
                    </p>
                </div>
            </div>
        </div>
        <div class="align-items-center row">
            <div class="col-lg-4 pb-3 pt-3">
                <img src={actual_class_1.default} width="1171.07" height="500.585"
                    viewBox="0 0 1171.07 884.585" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div data-aos="fade-right" class="col-lg-6 pb-3 pt-3">
                <div class="pb-3 pt-3">
                    <h3 class="text-primary">Actual Class</h3>
                    <p class="font-weight-light mb-0">
                        We offer actual classes of KOREAN LANGUAGE Training
                        Schedule of classes for weekdays 17 days Monday to Friday at least 3 hours a day with 3 sessions 
                        Morning (9:00am to 12:00nn) 
                        Afternoon class ( 1:00pm to 4:00pm)
                        Night class ( 6:00pm to 9:00pm)
                        Sunday class 
                        10 consecutive Sundays ( 9:00am to 4:00pm)
                    </p>
                </div>
            </div>
        </div>
        <div class="align-items-center row">
            <div class="col-lg-4 offset-lg-2 pb-3 pt-3">
                <img src={graduation_1.default} width="1255.003" height="500.707"
                    viewBox="0 0 1255.003 870.707" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div data-aos="fade-left" class="col-lg-6 pb-3 pt-3">
                <div class="pb-3 pt-3">
                    <h3 class="text-primary">Graduation</h3>
                    <p class="font-weight-light mb-0">
                    Giving of Certificates to all the students who have successfully completed the KOREAN LANGUAGE TRAINING/KOREAN CLASS.
                    Acknowledging those students who are dedicated on their training, Giving of awards/recognition to those TOP SCORERS 
                    </p>
                </div>
            </div>
        </div>
        <div class="align-items-center row">
            <div class="col-lg-4 pb-3 pt-3">
                <img src={skill_test.default} width="1175.976" height="500.199"
                    viewBox="0 0 1175.976 864.199" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div class="col-lg-6 pb-3 pt-3">
                <div data-aos="fade-right" class="pb-3 pt-3">
                    <h3 class="text-primary">Skill Test</h3>
                    <p class="font-weight-light mb-0">
                        PRIME KLC is conducted an actual skill test training  before attending the  SKILL TEST under HRD KOREA 
                        It is conducted after passing the EPS-TOPIK EXAM, In preparation of the  SKILL TEST in Manila
                        Students will undergo an actual training, There is an actual interview 
                        with the TEACHER/INSTRUCTOR and the STUDENT and practicing different task in just 1 second. 
                    </p>
                </div>
            </div>
        </div>
        <div class="align-items-center row">
            <div class="col-lg-4 offset-lg-2 pb-3 pt-3">
                <img src={departure_1.default} width="1329.507" height="500.707"
                    viewBox="0 0 1329.507 825.707" class="col-8 col-lg-12 d-block img-fluid ml-auto mr-auto"/>
            </div>
            <div class="col-lg-6 pb-3 pt-3">
                <div data-aos="fade-left" class="pb-3 pt-3">
                    <h3 class="text-primary">Departure in South Korea</h3>
                    <p class="font-weight-light mb-0">
                        After Passing the step by step process, PRIME KLC assisted the students financially until 
                        they reach SOUTH KOREA, We provide a free MALITA with financial assistance up to 50,000. 
                    </p>
                </div>
            </div>
        </div>

            </div>
        </div>


        {/* Students tesimonies */}
        <div data-aos="zoom-in" class="bg-light pb-5 pt-5 text-secondary">
        <div class="container pb-5 pt-3">
        <h5 class="text-center text-danger">Testimonials</h5>
        <Link to='/about-us'>
         <a data-aos="zoom-in" data-aos-duration="2000" class="btn btn-primary text-white pl-4 pr-4 rounded-pill" href="#">Read More</a>
        </Link>
        <h2 class="h1 mb-4 text-center text-dark">What our clients say</h2>
        <div data-aos="fade-right" id="carousel7" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="align-items-center row">
                        <div class="col-lg-4 pb-3 pt-3 text-center">
                            <img src="https://image.flaticon.com/icons/png/512/194/194931.png"
                                class="img-fluid rounded-circle"/>
                        </div>
                        <div class="col-lg-8 pb-3 pt-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64"
                                class="mb-3 text-danger">
                                <path
                                    d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z" />
                            </svg>
                            <p class="font-weight-light h5 mb-4">
                            Thank you and i am proud to be PRIME KLC family, kayo ang naging tulay sa pagtupad ko sa aking mga 
                            pangarap sa buhay at salamat din sa walang sawang supporta hanggang ngayon. 2yrs and 1month na ako 
                            ngayong nagtatrabaho dito sa SOUTH KOREA and still fighting for the future goals. sa mga kababayan ko jan na 
                            nagbabalak o gustong pumunta dito ito lang ang masasabi ko ituloy at pagsikapan niyo po dahil malaki talaga ang 
                            mababago sa buhay niyo at ilagay niyo palagi sa isip niyo na 
                            "NAKAYA KO NGA KAYO PA" kaya laban lang tiwala sa sarili at dasal lang palagi sa taas <br/>
                            #IamProudToBePrimeKLCFamily <br/> #감사함니다PrimeKLC
 
                            </p>
                            <h4 class="font-weight-bold mb-1 text-danger">DIONESIO NATINGGA</h4>
                            <p class="font-weight-bold testimonial_pos">KLT15</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="align-items-center row">
                        <div class="col-lg-4 pb-3 pt-3 text-center">
                            <img src="https://www.pngitem.com/pimgs/m/546-5468612_banner-library-college-vector-graduated-student-transparent-student.png"
                                class="img-fluid rounded-circle" />
                        </div>
                        <div class="col-lg-8 pb-3 pt-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64"
                                class="mb-3 text-danger">
                                <path
                                    d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z" />
                            </svg>
                            <p class="font-weight-light h5 mb-4">
                            Maraming salamat sa prime klc,
                            Kayo ang naging tulay ko upang makapag work dito sa korea.
                            Ngayon po ay 2 years and 6 months na po akong nag tatrabaho dito sa korea as factory worker and waiting po for extension  this coming  December if ever. na ma extend...
                            Salamat po ulit kung di dahil sa inyo wala po ako dito sa korea salamt  din sa mga teacher na nagtyatyagang magturo sa amin...at saka  ang masasabi kolang sa mga klt aspirants or mga eps students na nag aaral or mag aaral or tapos ng mag aral ..is magsikap at magtyaga lang kayo..kasi..kung para talga yan sa iyo  or inyo  no matter what happen..kahit bumagsak kaman ng paulit2x....makakapasa  karin  nian sa huli..wag kang mawalan ng pag asa...kasi..may mga kakilala din  ako  ditong..bumagsak  ng ilang  beses..nag try  parin  cya  at sa wakas..nakapasa..at ..natupad  ung mga pangarap  nia para sa  family  nia...at sa mga  nakapasa  na waiting..pa..mag antay2x lang muna  kayo.dyan  kasi..isa ang ating bansa na naka band pa   sa korea  gawa ng covid..so..while waiting  mag aral  parin  kayo dyan para  pagdating dito  ay.bihasa  na kayo sa kanilang language..so yan muna po😊😊 
                            <br />
                            #PrimeKLCYeoja
                            <br />
                            #화이팅 
                            <br />
                            #감사합니다PrimeKLC
                            <br />
                            #IamProudToBePrimeKLCFamily

                            </p>
                            <h4 class="font-weight-bold mb-1 text-danger">LESLIE GALENZOGA</h4>
                            <p class="font-weight-bold">STUDENT</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="align-items-center row">
                        <div class="col-lg-4 pb-3 pt-3 text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtCsWMSX0MDVGYPE13fKXNFNsTHN1OmO441pRMRmM2drbIvaOCGCPPkyrHRXMYXyAuKI&usqp=CAU"
                                class="img-fluid rounded-circle" />
                        </div>
                        <div class="col-lg-8 pb-3 pt-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64"
                                class="mb-3 text-danger">
                                <path
                                    d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z" />
                            </svg>
                            <p class="font-weight-light h5 mb-4">
                            Maraming salamat sa Prime klc sa tulong at suporta sa pagtupad ko NG PAngarap Kung makapag Korea..Malapit na 
                            rin akong mag 2 years dito sa Korea.. Ang Bilis lang Ng Panahon dati nangangarap lang din ako katulad NG iba at 
                            ngayon andito na ako... Kahit 2 days lang ako noon nag practice NG assembly sa skills test sa Prime ay Mas madali ko syang nagawa Doon sa actual na kasi maganda yong mga practice materials NG Prime.. Payo ko lang sa mga nagsisimula palang ay dapat e master niyo Muna mga Korean letters at Kung paano sila basahin tsaka pagkatapos memorize NG madaming vocabulary... Mas madali mong MA memorize ang mga vocabs Kung bihasa kanang magbasa....
                            Tapos basahin mo Yong Libro na ibibigay Nila at yong audio pabalik balik 
                            </p>
                            <h4 class="font-weight-bold mb-1 text-danger">MAR JUN AMISTOSO</h4>
                            <p class="font-weight-bold">Student</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="align-items-center row">
                        <div class="col-lg-4 pb-3 pt-3 text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsKcxumVNNxnCK86WbnZEtSsqNWBai2YHWLAUpRhQDYTAlczUD7_Ux1QLMnESAapGEQM&usqp=CAU"
                                class="img-fluid rounded-circle" />
                        </div>
                        <div class="col-lg-8 pb-3 pt-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" height="64" width="64"
                                class="mb-3 text-danger">
                                <path
                                    d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z" />
                            </svg>
                            <p class="font-weight-light h5 mb-4">
                            Maraming salamat sa prime klc,
                            Kayo ang naging tulay ko upang makapag work dito sa korea.
                            Ngayon po ay 1 year and 6 months na po akong nag tatrabaho dito sa korea as factory worker.
                            Kung di dahil sa inyo wala po ako dito sa korea,
                            I am proud to be prime klc family.
                            Kamsahamnida

                            </p>
                            <h4 class="font-weight-bold mb-1 text-danger">WALLY CATALAN</h4>
                            <p class="font-weight-bold">Student</p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators position-relative">
                <li data-target="#carousel7" data-slide-to="0" class="active bg-danger"></li>
                <li data-target="#carousel7" data-slide-to="1" class="bg-danger"></li>
                <li data-target="#carousel7" data-slide-to="2" class="bg-danger"></li>
                <li data-target="#carousel7" data-slide-to="3" class="bg-danger"></li>
            </ol>
        </div>
    </div>
</div>
        {/* End of Testimonies */}


        {/* Sevice Section */}

        
        <div class="custom-shape-divider-bottom-1624662396">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>

        <div class='services-div'>
        <div data-aos="fade-right" class="pb-5 pt-5">
        <div class="container pb-5 pt-5">
        <div class="align-items-center mb-3 row">
            <div class="col-lg-7">
                <h2 class="text-white">Services</h2>
                <p class="text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p>
            </div>
            <div class="col-lg-auto ml-auto">
                <a class="btn btn-primary pl-4 pr-4 rounded-pill" href="#">Learn More</a>
            </div>
        </div>
        <div class="justify-content-center row">
            <div data-aos="flip-left" class="col-lg-4 col-md-6 col-xl-4 pb-3 pt-3">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="60"
                        height="60" class="mb-3 text-danger">
                        <g>
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path
                                d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" />
                        </g>
                    </svg>
                    <h4 class="mb-3 text-danger">Learn Korean</h4>
                    <p class='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                    <a href="#" class="text-danger">Learn More</a>
                </div>
            </div>
            <div data-aos="flip-left" class="col-lg-4 col-md-6 col-xl-4 pb-3 pt-3">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="60"
                        height="60" class="mb-3 text-danger">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z" />
                        </g>
                    </svg>
                    <h4 class="mb-3 text-danger">Work in South Korea</h4>
                    <p class='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                    <a href="#" class="text-danger">Learn More</a>
                </div>
            </div>
            <div data-aos="flip-left" class="col-lg-4 col-md-6 col-xl-4 pb-3 pt-3">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="60"
                                height="60" class="mb-3 text-danger">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M9 18H4v-8h5v8zm-2-2v-4H6v4h1zm6 0V8h-1v8h1zm2 2h-5V6h5v12zm4-2V4h-1v12h1zm2 2h-5V2h5v16zm1 4H3v-2h19v2z" />
                                </g>
                            </svg>
                            <h4 class="mb-3 text-danger">Lorem Ipsum</h4>
                            <p class='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                            <a href="#" class="text-danger">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="custom-shape-divider-top-1624662447">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
        


        {/* End of Service Section */}



        {/* Branches Section */}

        <BranchesSection />
        {/* End of Branches */}
        <Footer/>
        </div>
        </>
    )
}

export default HomePage

