import React, { Component } from 'react';
import '../UofMFrance.css';
import { Image } from 'react-bootstrap';
import Francoise from './Staffs/Mont_Francoise_thumb.jpg';
import Corinne from './Staffs/Mont_Corinne_thumb.jpg';
import Cedric from './Staffs/Mont_Cedric_thumb.jpg';
import Paul from './Staffs/Mont_Paul_thumb.jpg';
import Kim from './Staffs/Mont_Kim_thumb.jpg';


class UofMFrance_About extends React.Component {
    render() {
        return (
            <div id="programFrance">
                <h1 className="colorChange">Sports & Culture in France: La vie sportive — About</h1>
                <p>
                    Montpellier is one of France’s fastest growing cities and an emerging cultural and educational center. Within easy reach of both mountains and the Mediterranean, and home to 100,000 university students, Montpellier is a young, vibrant city with a centuries-old history of intellectual advances and social tolerance.
                </p>
                <br/>
                <p>
                    Long known as one of France’s most sporty cities, Montpellier is a great place to learn about French sports culture.
                </p>
                <br/>

                <h1 className="colorChange">Housing & Meals</h1>
                <p>
                    Live in an extended-stay hotel with other program participants. You will be responsible for your own meals.
                </p>
                <br/>

                <h1 className="colorChange">Excursions</h1>
                <p>
                    The program includes excursions to several local sports and recreational facilities. Students will participate in local visits, such as hiking in the national park of Cévennes, observing a training session of the Montpellier handball club, and attending a professional handball game. A multi-day excursion to Paris and Skiing in Pyrenees (including lessons for beginners).
                </p>
                <br/>

                <h1 className="colorChange">Learning Outcomes</h1>
                <ul>
                    <li className="textSize_1vw">
                        Deepen cross-cultural understanding through interaction with faculty and community members
                    </li>
                    <li className="textSize_1vw">
                        Gain French, European, and international perspectives on sport
                    </li>
                    <li className="textSize_1vw">
                        Increase independence and self-reliance by learning to navigate French society
                    </li>
                    <li className="textSize_1vw">
                        Acquire practical knowledge in sports-related professions such as coaching, sport management and kinesiology
                    </li>
                </ul>
                <br/>
                <h1 className="colorChange">Faculty & Staff</h1>
                <br/>

                <Image src={Francoise}/>
                <br/>
                <br/>
                <h2 className="colorChange">Françoise Defrecheux-Chaton</h2>
                <p>
                    Françoise has been the On-Site Director of the program in Montpellier since 1990. With her staff, she oversees student services, excursions, housing arrangements, and academic coursework. She is also a professor in Business English at the Université de Montpellier and is well-connected in the local university community in Montpellier.
                </p>
                <br/>
                <p>
                    She holds a Bachelor's degree in Germanic Languages from the Université de Liège and a Master's from the University of Minnesota in French Literature. She has also taught at the University of Minnesota and Carleton College in Minnesota.
                </p>
                <br/>

                <Image src={Corinne}/>
                <br/>
                <br/>
                <h2 className="colorChange">Corrine Dumas</h2>
                <p>
                    Corinne has been the Assistant Director of the University of Minnesota Program in Montpellier since 2006. She currently teaches the course on Leadership and Experiential Learning for the program.
                </p>
                <br/>
                <p>
                    She received a MA in English from the University of Orléans in France and a MA in French and ESL from West Virginia University. Corinne studied for five years at the University of North Carolina where she was also a teaching assistant in the French department. She completed her course work and passed her PhD exams in Comparative Literature.
                </p>
                <br/>

                <Image src={Cedric}/>
                <br/>
                <br/>
                <h2 className="colorChange">Cedric Carpanedo</h2>
                <br/>
                <p>
                    Cedric is the logistic coordinator for the program in Montpellier and teaches the Conversational French class. He has been part of the team for ten years and has lived in Montpellier for 12. He spent two years as a teaching assistant for the French Department at Macalester College in Minnesota.
                </p>
                <br/>
                <p>
                    Originally from Avignon, he studied English and American civilization and literature at the Université d'Avignon et des pays de Vaucluse.
                </p>
                <br/>

                <Image src={Paul}/>
                <br/>
                <br/>
                <h2 className="colorChange">Paul Roger</h2>
                <br/>
                <p>
                    Paul is the Academic Advisor for the Montpellier programs. He has been teaching university courses for over twenty years, and currently teaches in his specialty for the University of Minnesota program and at the Université Paul-Valéry in the <a className="font_Change">Lettres Modernes</a> department.
                </p>
                <br/>
                <p>
                    Paul holds a PhD in medieval French literature from the University of North Carolina at Chapel Hill. He is originally from southern Rhode Island.
                </p>
                <br/>

                <Image src={Kim}/>
                <br/>
                <br/>
                <h2 className="colorChange">Kim Mousseron</h2>
                <br/>
                <p>
                    Kim is the Housing Coordinator for the Montpellier programs.
                </p>
                <br/>
                <p>
                    Kim received her BA from Mount Holyoke College and MA from Middlebury College. After teaching French for a year at Boston College, Kim permanently moved to France where she obtained her TEFL certification. Kim has lived in Montpellier for over 20 years. She was born and raised in western Massachusetts.­­­
                </p>
                <br/>
                <p>
                    Faculty: Dr. Robin Recours and Dr. Ludovic Marin, professors of sports studies at the University Montpellier
                </p>
                <br/>
                <h1 className="colorChange">About the Learning Abroad Center</h1>
                <p>Learning Abroad Center programs are:</p>
                <br/>
                <ul>
                    <li className="textSize_1vw">
                        Affordable: our programs are cost effective.
                    </li>
                    <li className="textSize_1vw">
                        Culturally rich: regardless of the program you choose, you will have the opportunity to immerse yourself in the local culture.
                    </li>
                    <li className="textSize_1vw">
                        Expertly managed: our staff in Minnesota and abroad are trained professionals and are always available to answer your questions from extensive pre-departure advising and online orientations to reentry programming. Your safety and well-being are paramount, and we work hard to ensure you have a rewarding and safe experience abroad.
                    </li>
                </ul>


            </div>



        )
    }
}

export default UofMFrance_About;