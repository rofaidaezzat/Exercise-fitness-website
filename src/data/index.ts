import { IprofissionalData, IServideData } from "../interface";

// Import service images
import serviceImg1 from '../assets/home/photo_2025-05-03_17-12-33.jpg';
import serviceImg2 from '../assets/home/photo_2025-05-03_17-13-08.jpg';
import serviceImg3 from '../assets/home/59e177f109a545c9cf98dc5166728672.jpg';
import serviceImg4 from '../assets/home/9509de15de991eaae662611c8af5b6d6.jpg';

// Import professional images
import profImg1 from '../assets/home/photo_2025-05-03_22-11-45.jpg';
import profImg2 from '../assets/home/photo_2025-05-03_22-16-01.jpg';
import profImg3 from '../assets/home/6d08c1b4da5b906b9e802865cce8647e.jpg';
import profImg4 from '../assets/home/77c442aefe6e0d07b2bc2a5abbfd6b34.jpg';
import profImg5 from '../assets/home/dffc5fee54384cc13a2c3ce755009e7f.jpg';

export const serviceData:IServideData[]=[
    {
        id:1,
        title:"PERFORMANCE",
        description :"SPORTS CONDITIONING PERSONAL / GROUP TRAINING SPECIALTY SERVICES",
        image: serviceImg1
    },
    {
        id:2,
        title:"EVALUATION",
        description :"3D BODY SCANIN-DEPTH BODY ASSESSMENT PHYSICAL AND DIETARY ASSESSMENT",
        image: serviceImg2
    },
    {
        id:3,
        title:"STRENGTH",
        description :"WEIGHT TRAINING, RESISTANCE TRAINING, RECOVERY TRAINING",
        image: serviceImg3
    },
    {
        id:4,
        title:"PERFORMANCE",
        description :"SPORTS CONDITIONING PERSONAL / GROUP TRAINING SPECIALTY SERVICES",
        image: serviceImg4
    }
]

export const profissionalData:IprofissionalData[]=[
    {
        id:1,
        Name:"Borney Exiteid",
        imageurl: profImg1
    },
    {
        id:2,
        Name:"Elsa Windia",
        imageurl: profImg2
    },
    {
        id:3,
        Name:"Rachel Blake",
        imageurl: profImg3
    },
    {
        id:4,
        Name:"Jenna Rhodes",
        imageurl: profImg4
    },
    {
        id:5,
        Name:"Geourge Aryo",
        imageurl: profImg5
    }
]