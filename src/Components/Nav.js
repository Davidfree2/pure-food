

const Nav = () => {
    return (
        <div class='bg-emerald-100 w-full p-4 flex items-center justify-around'>
            <div class='text-4xl tracking-wider pl-10 w-3/5 flex justify-start '>
                <h1>Pure</h1>
            </div>
            <div class='flex justify-end w-2/5 pr-10'>
                <ul class='flex justify-around w-4/5'>
                    <li class='text-lg cursor-pointer'>Explore</li>
                    <li class='text-lg'>Explore</li>
                    <li class='text-lg'>Explore</li>
                    <li class='text-lg'>Explore</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
