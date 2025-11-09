import paycomCover from './Pages/Paycom/PaycomImages/paycom_cover.png';
import orgPortalCover from './Pages/OrgPortal/OrgPortalImages/orgportal_cover.png';
import utdesignCover from './Pages/UTDesignCapstone/UTDesignCapstoneImages/utdesigncapstone_cover.png'

const work = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        selectedWorks: true,
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