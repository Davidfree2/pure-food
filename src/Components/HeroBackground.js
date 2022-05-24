

const HeroBackground = () => {
    return (
        <div class = 'h-screen overflow-hidden flex justify-center items-center'>
            <video loop autoPlay muted class='flex justify-center items-center'>
                <source src='./Videos/hero.mp4' type='video/mp4' />
            </video>
        </div>
    );
}

export default HeroBackground;
