import { useNavigate } from 'react-router-dom'

function WorkCard(props){
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/susanzhang/work/${props.url}#${props.urlid}`);
        setTimeout(() => {
            const target = document.getElementById(`${props.urlid}`);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
    }

    return(
        <div
        onClick={handleClick}
        className="flex flex-col md:flex-row items-center gap-6 mt-10 mx-12 cursor-pointer hover:opacity-90"
        >
        {/* left column – image */}
        <div className="w-full md:w-1/2">
            <img
            src={props.coverImg}
            alt="Hero"
            className="w-full h-auto object-cover"
            />
        </div>

        {/* right column – text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-2 md:mt-0 gap-2">
            <span className="inline-flex items-center font-bold text-white italic text-[24px] font-['Times_New_Roman']">{props.title}</span>
            <p className="text-base text-[16px]">{props.description}</p>
        </div>
        </div>
    )
}

export default WorkCard