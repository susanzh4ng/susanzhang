import paycomCover from './Pages/Paycom/PaycomImages/paycom_cover.png';
import orgPortalCover from './Pages/OrgPortal/OrgPortalImages/orgportal_cover.png';
import utdesignCover from './Pages/UTDesignCapstone/UTDesignCapstoneImages/utdesigncapstone_cover.png'
import capitalOneCover from './Pages/CapitalOne/CapitalOneImages/capitalone_cover.png'

const work = [
    {
        id: 1,
        selectedWorks: true,
        workPage: true,
        playPage: false,
        url: "capitalone",
        urlid: "ontrack",
        coverImg: capitalOneCover,
        title: "Capital One OnTrack",
        description: "Enabling Gen Z to understand the car buying journey and cost of ownership, tasked by Capital One's Auto Finance Team",
    },
    {
        id: 2,
        selectedWorks: true,
        workPage: true,
        playPage: false,
        url: "paycom",
        urlid: "paycom",
        coverImg: paycomCover,
        title: "Paycom Onboarding Dashboard",
        description: "Redesigning Paycom's onboarding experience",
    },
    {
        id: 3,
        selectedWorks: true,
        workPage: true,
        playPage: false,
        url: "orgportal",
        urlid: "orgportal",
        coverImg: orgPortalCover,
        title: "OrgPortal",
        description: "UT Dallas's student organization portal, built with love by a UT Dallas student organization",
    },
    {
        id: 4,
        selectedWorks: false,
        workPage: true,
        playPage: false,
        url: "utdesign-capstone",
        urlid: "utdesign",
        coverImg: utdesignCover,
        title: "UTDesign® Capstone",
        description: "Redesigning UTDesign® Capstone's websites, for UT Dallas"
    }
]

export default work