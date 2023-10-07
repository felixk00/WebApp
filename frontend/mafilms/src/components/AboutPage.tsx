export default function AboutPage() {
    return (
        <div>
            <div className='mx-auto p-4'>
            <div className="mx-auto flex max-w-7xl flex justify-between">
                <h1 className="text-5xl font-bold">About Us</h1>
                </div>

            </div>

            <div className='mx-auto flex items-center justify-center p-4'>

                <div className="mx-auto flex max-w-7xl flex justify-between">

                    <div className="sm:w-1/2 md:w-1/3">

                        <img
                            src="https://res.cloudinary.com/mafilms/image/upload/v1696680716/Projects/Liguria/DSC_2486_byeqmi.jpg"
                            alt="TEstfoto"
                            className="w-full h-auto rounded-lg"

                        />

                    </div>
                    <div className="sm:w-1/2 md:w-2/3 pl-4">

                        <h1 className="text-2xl font-bold">Welcome to MA-Films!</h1>

                    </div>



                </div>


            </div>
        </div>
    );
}
