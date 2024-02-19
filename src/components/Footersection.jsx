import './App.css'

const Footersection = () => {
    return (
        <footer className="h-fit w-full border-t-2 mx-auto p-2 xl:p-10">
            <div className="space-y-5">
                <div className=" grid grid-cols-4">
                    <div className="col-span-2 xl:col-span-3 md:col-span-3 2xl:col-span-3">
                        <a href="/" className="text-white">
                            <span className="font-extrabold text-2xl text-black xl:text-3xl">HM.
                            </span>
                        </a>
                    </div>
                    <div className="col-span-2 xl:col-span-1 md:col-span-1 2xl:col-span-1 flex justify-between text-white text-xs xl:text-base 2xl:text-base">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Activities</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <p className="text-white text-xs xl:text-base 2xl:text-base font-sans">© Designed By Afyww</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
