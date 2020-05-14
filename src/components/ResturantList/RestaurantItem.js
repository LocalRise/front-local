import React from 'react'

const RestaurantItem = ({ item, index }) => {
    return (
        <>
            {item &&
                <div
                    key={index}
                    className="max-w-md mx-auto bg-gray-100 mt-10 rounded-lg shadow-xl"
                >
                    <div>
                        <img class="object-cover h-48 w-full " src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg" />
                    </div>
                    <div className="m-3 p-1">
                        <p className="text-base text-gray-700 leading-normal">{item}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default RestaurantItem;