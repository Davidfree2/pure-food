

const HeroBackground = () => {
    return (
        <div class = 'bg-emerald-100 h-screen overflow-hidden flex p-4 justify-center items-center'>
            <video loop autoPlay muted class='flex justify-center items-center'>
                <source src='./Videos/hero.mp4' type='video/mp4' />
            </video>
            <h1 class='drop-shadow-2xl text-emerald-300 font-bold text-9xl absolute top-1/2'>Pure</h1>
        </div>
    );
}

export default HeroBackground;
