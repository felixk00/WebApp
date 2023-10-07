

export default function LandingPage() {
    return (
        <div>
            <div className='mx-auto flex items-center justify-center p-4'>
                <div className="mx-auto flex max-w-7xl flex-col justify-between relative">




                    <div className="absolute lg:px-6 lg:py-4 px-4 py-2 lg:text-7xl text-2xl text-white font-bold">
                        <div className="animate-typing1">
                            Capture Moments
                        </div>
                        <div className="animate-typing2">
                            like never before.
                        </div>
                    </div>






                    <img
                        src="https://res.cloudinary.com/mafilms/image/upload/v1696680715/Projects/Liguria/DSC_2479_n8dpip.jpg"
                        alt="TEstfoto"
                        className="w-full h-auto rounded-lg"

                    />
                    {/* Desktop button */}
                    <a
                        id="desktopButton"
                        className="absolute bottom-7 left-7 hidden md:inline-block 
                    text-center px-4 py-2 text-lg font-bold w-48 border border-white 
                    bg-white transition hover:bg-white/20 hover:text-white rounded-lg dark:text-black"
                        href="/showroom/"
                    >
                        Zum Portfolio
                    </a>

                    <a
                        id="desktopButton"
                        className="absolute bottom-7 left-60 hidden md:inline-block 
                    text-center text-white  px-4 py-2 text-lg font-bold w-48 hover:text-white hover:underline rounded-lg dark:text-black"
                        href="/about/"
                    >
                        About Us
                    </a>

                    {/* Mobile and tablet button */}
                    <a
                        id="mobileButton"
                        className="absolute bottom-4 left-4 md:hidden text-center px-4 py-2 
                    font-bold w-36 border border-white bg-white 
                    transition hover:bg-white/10 hover:text-white rounded-lg dark:text-black"
                        href="/showroom/"
                    >
                        Zum Portfolio
                    </a>




                </div>



            </div>

            <div className='mx-auto p-4'>
                <div className="mx-auto max-w-7xl">

                    <h1 className="text-2xl font-bold">Welcome to MA-Films!</h1>
                </div>
            </div>
            <div className='mx-auto flex items-center justify-center pr-4 pl-4 pb-4'>
                <div className="mx-auto flex max-w-7xl flex justify-between">
                    <p className="text-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat,  eirmod tempor invidunt</p>

                </div>

            </div>

            <div className='mx-auto flex items-center justify-center p-4'>
                <div className="mx-auto flex max-w-7xl flex justify-between">

                    <div className="w-1/2 pr-4">

                        <img
                            src="https://res.cloudinary.com/mafilms/image/upload/v1696680716/Projects/Liguria/DSC_2486_byeqmi.jpg"
                            alt="TEstfoto"
                            className="w-full h-auto rounded-lg"

                        />

                    </div>
                    <div className="w-1/2 pl-4">

                        <img
                            src="https://res.cloudinary.com/mafilms/image/upload/v1696680723/Projects/Liguria/DSC_2506_pgjznu.jpg"
                            alt="TEstfoto"
                            className="w-full h-auto rounded-lg"

                        />

                    </div>



                </div>


            </div>
            <div className='mx-auto p-4 flex items-center justify-center'>
                <div className="mx-auto max-w-7xl">
                    <hr className="border-t border-gray-300 my-4" />

                    <h1 className="text-2xl font-bold flex items-center justify-center">Placeholder</h1>



                    <p className="text-xl flex items-center justify-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat,  eirmod tempor invidunt</p>

                    <hr className="border-t border-gray-300 my-4" />


                </div>

            </div>


           

           

            <div className='mx-auto flex items-center justify-center p-4'>
                <div className="mx-auto flex max-w-7xl flex-col justify-between relative pt-4">


                    <img
                        src="https://res.cloudinary.com/mafilms/image/upload/v1696680715/Projects/Liguria/DSC_2479_n8dpip.jpg"
                        alt="TEstfoto"
                        className="w-full h-auto rounded-lg"

                    />
                    {/* Desktop button */}
                    <a
                        id="desktopButton"
                        className="absolute bottom-7 left-7 hidden md:inline-block 
                    text-center text-white px-4 py-2 text-lg font-bold w-48 border border-white 
                     transition hover:bg-white/20 hover:text-white rounded-lg dark:text-black"
                        href="/contact/"
                    >
                        Contact Us
                    </a>

                    {/* Mobile and tablet button */}
                    <a
                        id="mobileButton"
                        className="absolute bottom-4 left-4 md:hidden text-center px-4 py-2 
                    font-bold w-36 border border-white bg-white 
                    transition hover:bg-white/10 hover:text-white rounded-lg dark:text-black"
                        href="/contact/"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <div className='mx-auto p-4 flex items-center justify-center'>
                <div className="mx-auto max-w-7xl">
                    <hr className="border-t border-gray-300 my-4" />

                    <h1 className="text-2xl font-bold flex items-center justify-center">Placeholder</h1>



                    <p className="text-xl flex items-center justify-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat,  eirmod tempor invidunt</p>

                    <hr className="border-t border-gray-300 my-4" />


                </div>

            </div>

        </div >
    );
} 