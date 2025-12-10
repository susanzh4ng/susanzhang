import Nav from '@/Components/Nav/Nav';
import WorkCard from '@/Components/WorkCard/WorkCard';
import Footer from '@/Components/Footer/Footer';
import work from '@/work';

export default function Work() {

      /* defensive: make sure we really have an array */
    if (!Array.isArray(work)) {
        console.error('work is not an array', work);
        return <p style={{ color: 'red' }}>Data error check console</p>;
    }
    return (
        <div className='w-full text-white'> 
            <header className="fixed top-8 left-8 right-8 bg-background/80">
                <Nav />
            </header>
            
            <div className="mx-0 lg:mx-60 px-6 pt-50">
                <h1 className="text-white text-[36px] md:text-[40px] lg:text-[45px] italic font-normal leading-normal font-['Times_New_Roman']">⋆｡‧˚UX works˚‧｡⋆</h1>
                {work.map((w) => (
                <WorkCard key={w.id} {...w} />
                ))}
            </div>
            <Footer />
        </div>
    );
}