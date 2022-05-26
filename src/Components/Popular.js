
const Popular = () => {
    return (
        <>
            <div class='flex-col h-screen justify-between items-start'>
                <div class='flex h-1/2'>
                    <div class='flex w-1/2 p-14 bg-white items-center'>
                        <h2 class='bg-white text-xl'><b class='text-2xl'>REFRESH</b> Unwind to the rhythmic sounds of the waves on the shore, walk the beach to nearby Shadmoor State Park, surf the perfect wave at Terrace, or explore further afield with one of our complimentary cruiser bikes. With so many ways to relax and reconnect, our team is here to help you curate your perfect stay.</h2>
                    </div>
                    <div class='w-1/2 bg-cover bg-center'style={{"background-image": "url(./Images/raviolies.jpeg)"}}>
                    </div>
                </div>
                <div class='flex h-1/2'>
                    <div class='w-1/2 bg-cover bg-center'style={{"background-image": "url(./Images/delicous2.jpeg)"}}>
                    </div>
                    <div class='flex w-1/2 p-14 bg-white items-center'>
                        <h2 class='bg-white text-xl'><b class='text-2xl'>UNWIND</b> Unwind to the rhythmic sounds of the waves on the shore, walk the beach to nearby Shadmoor State Park, surf the perfect wave at Terrace, or explore further afield with one of our complimentary cruiser bikes. With so many ways to relax and reconnect, our team is here to help you curate your perfect stay.</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popular;
