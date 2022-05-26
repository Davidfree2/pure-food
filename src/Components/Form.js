

const Form = () => {
    return (
        <>
        <div class='flex-col items-center justify-center p-10 w-full'>
            <h1 class='mb-6 tracking-wide w-1/2 leading-8 text-2xl'><b class='font-medium'>Stay in touch </b>theres always something going on here. Stay in the loop for events, experiences, and more.</h1>
            <form class='w-1/2'>
                <input class='tracking-wide leading-3 focus:outline-none border-b-2 border-black bg-emerald-100 w-5/12 mr-4 p-2 pl-1 text-lg mb-4' type='text' placeholder='First Name'/>
                <input class='tracking-wide leading-3 focus:outline-none border-b-2 border-black bg-emerald-100 w-5/12 mr-4 p-2 pl-1 text-lg mb-4' type='text' placeholder='Last Name'/>
                <input class='tracking-wide leading-3 focus:outline-none border-b-2 border-black bg-emerald-100 w-5/12 mr-4 p-2 pl-1 text-lg mb-4' type='text' placeholder='Email'/>
            </form>
            <button class='hover:bg-emerald-400 tracking-wide mt-4 mb-4 text-lg bg-white border-2 border-slate-200 pl-4 pr-4 pb-2 pt-2'>Submit</button>
            <h4 class='hover:text-black cursor-pointer italic m-1 text-slate-500'>Privacy Policy</h4>
        </div>
        </>
    );
};

export default Form;
