import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
    {
        id: uuidv4(),
        name: 'Rate My Internship',
        desc:
            'An app similar to ratemyprofessor.com, where college students can rate internships they have attended or ' +
            'become more familiar with a particular internship by reading reviews made by others.',
        img: UTrackerImg,
    },
    {
        id: uuidv4(),
        name: 'CampusPaths',
        desc:
            'A single-page webapp that allows you to choose two buildings on the ' +
            'University of Washington\'s campus and draws the shortest walking path between those two buildings.',
        img: GreenCtgImg,
    },
    {
        id: uuidv4(),
        name: 'The Broadstreet Institute Link-Tree',
        desc:
            "A React-Gatsby webapp that is linked from the Broadstreet Institute internship's social media accounts and acts" +
            "as a link-tree to allow users to navigate through all the important links the internship has to offer." +
            "This is my current project and is thus currently in progress.",
        img: CoinTrackerImg,
    },
    {
        id: uuidv4(),
        name: "Broadstreet Institute Website MVP",
        desc:
            "The MVP of the GatsbyJS React webapp that I am currently building for Broadstreet.io's " +
            "Broadstreet Institute internship.",
        img: CavinImg,
    },
];

export default projects;