export const Banner = () => {
    return(
       <div className="banner w-full md::w-2/3 px-2 mx-auto relative flex items-center-justify-between">
        <div className="banner-description w-full md:w-1/2 p-3"></div>
        <div className="banner-image w-full md:w-1/2 p-3">
            <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-95" />
        </div>
       </div>
    )
}