import Header from '../components/header';

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-7">
                <section className="container mx-auto">
                    <div className='flex justify-between items-center space-x-4'>
                        <div className="box box-content rounded-md border-2 p-4 h-80 w-70 bg-[#9caf88] box-shadow">
                        </div>
                        <div className="box box-content rounded-md border-2 p-4 h-80 w-70 bg-[#9caf88] box-shadow">
                        </div>
                        <div className="box box-content rounded-md border-2 p-4 h-80 w-70 bg-[#9caf88] box-shadow">
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;