import { books, graduate, radio } from "@/assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
    { 
        src: books, 
        value: '600+', 
        label: 'Different Courses'
    },
    { 
        src: graduate, 
        value: '700,000+', 
        label: 'Students Enrolled' 
    },
    { 
        src: radio, 
        value: '10,000+', 
        label: 'Successful Transition' 
    },
];

export const products = [
    {
        imgURL: "",
        title: "PW Skills lab",
        desc: "Supercharge your project development with our robust lab."
    },
    {
        imgURL: "",
        title: "Job Portal",
        desc: "Use exceptional templates for a stand-out resume minus sign up process."
    },
    {
        imgURL: "",
        title: "Experiece Portal",
        desc: "PW Skill's self-paced experience portal prioritises hands-on training with 570+ intership projects."
    },
    {
        imgURL: "",
        title: "Become an affiliate",
        desc: "Explore affiliate marketing oppurtunities with PW Skills and attain financial freedom."
    },
    {
        imgURL: "",
        title: "Hall of fame",
        desc: "Our student placements and 100K+ career transitions speak volumes about our courses."
    },
]

export const footerLinks = [
    {
        title: "PW Skills",
        links: [
            { name: "About us", link: "/about us" },
            { name: "FAQs", link: "/faqs" },
            { name: "Privacy policy", link: "/privacy-policy" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "PW Skills Lab", link: "/" },
            { name: "Job Portal", link: "/" },
            { name: "Experience Portal", link: "/" },
            { name: "Become an affiliate", link: "/" },
            { name: "Hall of fame", link: "/" },
        ],
    },
    {
        title: "Links",
        links: [
            { name: "Discord Channel", link: "/" },
            { name: "PW Youtube", link: "/" },
            { name: "Careers", link: "/" },
        ],
    },
];