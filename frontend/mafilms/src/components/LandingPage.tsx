

export default function LandingPage() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col justify-between relative">

            <div className="mx-auto flex max-w-6xl flex-col justify-between relative">


                <div className="absolute left-7 top-7 text-7xl text-white font-bold">
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
                <a id="lpageButton" className="absolute bottom-7 left-7 text-2xl text-center font-bold px-4 py-2 w-64 border border-white bg-white
            transition hover:bg-white/10 hover:text-white rounded-lg" href="/showroom/">Zum Portfolio</a>



            </div>
            <br />
            <br />
            <div className="mx-auto flex max-w-6xl flex-col justify-between relative">


                <h1 className="text-3xl font-bold leading-relaxed">Welcome to MA-Films!</h1>

                <p className="text-2xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>


            </div>

            <br />
            <br />
            <div className="mx-auto flex max-w-6xl flex-col justify-between relative">

                <img
                    src="/assets/pictures/DSC_0305.jpg"
                    alt="TEstfoto"
                    className="w-1/2 left-0 h-auto rounded-lg"

                />
             
                
            </div>

        </div>


    );
} 