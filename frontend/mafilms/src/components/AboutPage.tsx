export default function AboutPage() {
    return (
        <div>
            <div className='mx-auto p-4'>
                <div className="mx-auto flex max-w-7xl flex justify-between">
                    <h1 className="text-5xl font-bold">About Us</h1>
                </div>

            </div>

            <div className='mx-auto flex items-center justify-center p-4'>

                <div className="mx-auto flex flex-col md:flex-row max-w-7xl justify-between">

                    <div className="sm:w-full md:w-1/2 md:pr-4"> {/* Full width on mobile, half width on desktop */}

                        <img
                            src="https://res.cloudinary.com/mafilms/image/upload/v1696680715/Projects/Liguria/DSC_2479_n8dpip.jpg"
                            alt="TEstfoto"
                            className="w-full h-auto rounded-lg"

                        />

                    </div>
                    <div className="sm:w-full md:w-1/2 md:pl-4 mt-4 md:mt-0"> {/* Full width on mobile, half width on desktop */}

                        <h1 className="text-3xl font-bold">Melih Diyha</h1>
                        <br />
                        <p className="text-xl">
                            <span className="font-bold">Age:</span> xx
                        </p>
                        <br />

                        <p className="text-xl">
                            "Zitat"
                        </p>
                        <br />
                        <p className="text-xl">
                            <span className="font-bold">Hobbies:</span> ...
                        </p>


                    </div>



                </div>


            </div>
            <div className='mx-auto flex items-center justify-center p-4'>

                <div className="mx-auto flex flex-col md:flex-row max-w-7xl justify-between">

                    <div className="sm:w-full md:w-1/2 md:pr-4"> {/* Full width on mobile, half width on desktop */}

                        <img
                            src="\assets\pictures\IMG-20220225-WA0002.jpg"
                            alt="TEstfoto"
                            className="w-full h-auto rounded-lg"

                        />

                    </div>
                    <div className="sm:w-full md:w-1/2 md:pl-4 mt-4 md:mt-0"> {/* Full width on mobile, half width on desktop */}

                        <h1 className="text-3xl font-bold">Felix Kienle</h1>
                        <br />
                        <p className="text-xl">
                            <span className="font-bold">Age:</span> 22
                        </p>
                        <br />

                        <p className="text-xl">
                            "Zitat"
                        </p>
                        <br />

                        <p className="text-xl">
                            <span className="font-bold">Hobbies:</span> Gitarre spielen, Konzerte besuchen & Fitness
                        </p>


                    </div>



                </div>


            </div>
        </div>
    );
}
