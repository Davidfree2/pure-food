

const Nav = () => {
    return (
        <div class='z-50 sticky top-0 border-b-2 border-slate-300  bg-emerald-100 w-full p-4 flex items-center justify-around'>
            <div class='text-4xl tracking-wider pl-10 w-3/5 flex justify-start '>
                <h1>Pure</h1>
            </div>
            <div class='flex justify-end w-2/5 pr-10'>
                <ul class='flex justify-around w-4/5'>
                    <li class='text-xl font-medium tracking-wide cursor-pointer'>Api</li>
                    <li class='text-lg'>Generator</li>
                    <li class='text-lg'>About</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
