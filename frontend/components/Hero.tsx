const Hero = () => {
    return (
        <section className="relative w-full h-112 bg-[url('https://images.unsplash.com/photo-1565954786194-d22abeaac3ae')] bg-cover bg-center ">
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-4">
                <h1 className="text-white text-4xl font-bold mb-2">
                    Open job vacancies
                </h1>
                <p className="text-gray-200 text-lg">
                    You can search for vacancies in your field by industry, job
                    title or area.
                </p>
            </div>
        </section>
    );
};

export default Hero;
