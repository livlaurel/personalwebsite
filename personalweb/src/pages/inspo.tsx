import Header from '../components/header';
import Footer from '../components/footer';

const Inspire = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-row items-start'>
                    <div className='flex flex-col space-y-6 text-xl flex-1 ml-10 mr-30 max-w-3xl'>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Inspire;
