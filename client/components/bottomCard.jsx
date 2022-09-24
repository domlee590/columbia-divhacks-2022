const BottomCard = ({img,header,bodyText}) => {
    return (
        <div class="flex bg-white rounded-lg outline outline-offset-0 outline-black border-r-green-200" style={{boxShadow:'3px 3px #dcfce7'}}>
            <div class="w-1/3">
                <img class="object-cover h-full w-96 rounded-l-lg" src={img}/>
            </div>
            <div class="w-2/3 pl-3 font-serif">
                <h1 class="text-2xl font-bold">{header}</h1>
                <p class="text-gray-500">{bodyText}</p>
            </div>
        </div>
    );
}
export default BottomCard;
