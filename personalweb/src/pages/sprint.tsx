import Header from '../components/header';
import Footer from '../components/footer';
import sprint from '../imgs/Sprint.svg'

const Sprint = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={sprint} alt='calmkeys' className='w-90 h-40' />
                    <p className='font-mono font-medium tracking-tighter'>Plan Together. Ship Faster.</p>
                </div>


                <div className="flex flex-col justify-start items-left ml-20 mr-20 mt-15">
                    <h2 className="text-5xl font-stretch-expanded font-bubble font-medium mb-5">Overview</h2>
                    <div className="flex flex-row gap-6 items-start">
                        <p className="mb-15 text-xl/10 w-1/2">
                        Sprint is a project management application built for software teams. Inspired by tools like Jira and Notion, Sprint provides a clean and intuitive workspace for tracking issues, managing sprints, and collaborating on projects.
                        </p>

                    </div>

                    <h2 className="text-5xl font-stretch-expanded font-bubble font-medium mb-5">SPRINT IS CURRENTLY UNDER CONSTRUCTION</h2>

                    <button className="text-m mb-5 pt-3 pb-3 pl-1 pr-1 w-32 text-[#fbf7ed] bg-[#f8a3a3] rounded-lg hover:bg-[#e17878]"
                        onClick={() => { window.history.back()}} >
                            ← Back
                    </button>
                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Sprint;
