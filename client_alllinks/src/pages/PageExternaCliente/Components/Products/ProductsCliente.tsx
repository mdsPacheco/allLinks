import React from 'react'

interface product{
  id: number;
  name: string; 
  img: string;
  price: string;
}

interface styleCustom {
  bg: {}
}

interface products {
  styleCustom: styleCustom ;
  products: product[] 
}


export function ProductsCliente({products, styleCustom}:products) {
  return (

    <div className='flex flex-col'>

      <div  className='flex gap-10 flex-wrap w-full m-6'>
        {products.map(item => (

          <div key={item.img} className=" gap-y-10 gap-x-6 xl:gap-x-8 max-w-xs bg-white rounded-md min-w-[15%] drop-shadow-2xl ">

            <div className="group relative">

              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img 
                  src={item.img}
                  alt="Front of men&#039;s Basic Tee in black." 
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full" 
                />
              </div>

              <div className="mt-4 flex justify-between p-2">
                <div>

                  <h3 className="text-sm text-gray-900">
                    <a href="#" className="text-gray-900">
                      {item.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.price}</p>
              </div>

            </div>

          </div>

        ))}
      </div>
    </div>

  );
}
