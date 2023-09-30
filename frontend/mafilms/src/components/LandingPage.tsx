

export default function LandingPage() {
    return (
        <div className='mx-auto flex items-center justify-center p-4'>
            <div className="mx-auto flex max-w-4xl flex-col justify-between relative">




                <div className="absolute lg:px-6 lg:py-4 px-4 py-2 lg:text-7xl text-2xl text-white font-bold">
                    <div className="animate-typing1">
                        Capture Moments
                    </div>
                    <div className="animate-typing2">
                        like never before.
                    </div>
                </div>

              




                <img
                    src="/assets/pictures/DSC_0305.jpg"
                    alt="TEstfoto"
                    className="w-full h-auto rounded-lg"

                />
                {/* Desktop button */}
                <a
                    id="desktopButton"
                    className="absolute bottom-7 left-7 hidden md:inline-block text-center px-4 py-2 text-lg font-bold w-48 border border-white bg-white transition hover:bg-white/20 hover:text-white rounded-lg dark:text-black"
                    href="/showroom/"
                >
                    Zum Portfolio
                </a>

                {/* Mobile and tablet button */}
                <a
                    id="mobileButton"
                    className="absolute bottom-4 left-4 md:hidden text-center px-4 py-2 font-bold w-36 border border-white bg-white transition hover:bg-white/10 hover:text-white rounded-lg dark:text-black"
                    href="/showroom/"
                >
                    Zum Portfolio
                </a>




            </div>




        </div>

    );
} 