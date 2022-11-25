import React from 'react'

interface styleCustom {
  name: {}, 
  biography: {}
}

interface Dados {
  photo_file: string | undefined;
  fist_name: string | undefined;
  last_name: string | undefined;
  biography: string | undefined;
  styleCustom: styleCustom ;
}

export function Profile({photo_file, fist_name, last_name, biography, styleCustom}: Dados) {

  return (
    <div className='flex flex-col gap-1 pt-8 pb-2'>
      <div id="profile" className="space-y-3 bg-opacity-60 ">

        <img
          src={photo_file}
          alt="Avatar user"
          className="w-36 rounded-full mx-auto"
        />

        <div>

          <h2 className="font-medium text-2xl  text-center text-teal-500"  style={styleCustom.name}>
            {fist_name} {last_name}
          </h2>

          <p className="text-xl text-gray-500 text-center" style={styleCustom.biography}>
            {biography}
          </p>

        </div>
      </div>
    </div>
  );
}