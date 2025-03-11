import Header from '../components/header';
import Footer from '../components/footer';

const Dev = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-row items-start'>
                    <div className='flex flex-col space-y-6 text-6xl font-bold tracking-tighter flex-1 ml-10 mr-30 max-w-3xl'>
                        <div className="fade-in fade-in-1">Create</div>
                        <div className="fade-in fade-in-2">Design</div>
                        <div className="fade-in fade-in-3">Code</div>
                    </div>
                    <div className="box box-content rounded-md p-4 h-50 w-400 bg-[#9caf88] mr-5 ml-10">
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Dev;
