import Image from "next/image";
import React from "react";

const PokemonBlog = () => {
  return (
    <div className="w-[1920px] h-[1080px] text-blue text-5xl ">
      <div className="w-[576px] h-[136px] mt-[107px] mb-[64px] mx-auto text-center font-bold">
        <h2 className=" ">Ash & Pikachu Arrive in Pokémon Universe</h2>
      </div>
      <div className="flex justify-center w-[1546px] h-[700px] mx-auto">
        <div className="flex">
          <span>
            <p className="text-xs w-[648px] h-[108px] flex-wrap">
              Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
              elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor
              facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam
              scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar
              ac mattis porta amet et. Nisl urna non fames felis leo. Vitae
              pulvinar sed viverra sit pretium lorem elementum. Iaculis sit
              maecenas sodales mi convallis justo aliquam. Tincidunt semper ut
              ornare vivamus lectus.
            </p>

            <p className="text-xs w-[424px] h-[184px] flex-wrap">
              Lorem ipsum dolor sit amet consectetur. Turpis integer massa
              consectetur sed enim quis viverra. Vestibulum eu nibh dolor
              semper. Nisl feugiat quis nec odio pulvinar feugiat velit. Nulla
              massa sit morbi morbi. Tortor viverra eget lacus feugiat. Tempus
              vitae vitae orci at ultrices nisi diam faucibus. Ultricies in
              cursus volutpat aliquam turpis urna in sed. Hendrerit arcu sit
              lectus adipiscing egestas semper nunc. Ante consectetur id congue
              pulvinar libero tristique et orci. Platea convallis dictum dui
              augue. Tincidunt mattis urna sit semper sed duis feugiat mi.
            </p>
            <p className="text-xs w-[648px] h-[108px] flex-wrap">
              Lorem ipsum dolor sit amet consectetur. Tincidunt at cras tortor
              non volutpat quisque facilisis. Ultricies consequat sed vitae ac.
              Nisl eu nam id lectus tellus sit egestas. Orci iaculis et vehicula
              nisi facilisi neque lorem. In vulputate feugiat lobortis eros
              viverra. Turpis viverra vel fames enim tortor. Scelerisque
              dictumst aliquam gravida eget ut accumsan. A est dis platea vitae
              blandit quis. Ultricies ac at urna vel morbi diam. Donec ut sit
              sit et. Etiam cum faucibus eu elementum ut fermentum in cursus.
            </p>
            <p className="text-xs w-[872px] h-[252px] flex-wrap">
              At a enim parturient id. Suspendisse ullamcorper fermentum
              accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
              etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
              Vulputate sit phasellus proin eget arcu. Enim nec ante velit erat
              nibh nunc amet. Tellus at sit imperdiet non. Cras dictum curabitur
              urna mauris in. Ut dui odio sagittis ut imperdiet ultricies mauris
              ac. A sit id etiam vitae non posuere tristique. Morbi sit mi sed
              nam amet tristique tellus. Sed quam aliquam pharetra nunc ipsum
              mattis. Volutpat pellentesque cras euismod habitant sit nibh.
              Dictum odio at aliquam sed. Orci odio lacinia id sem sed
              suspendisse mi fringilla purus. Quis sed ultricies ac nullam odio.
              Gravida sollicitudin viverra ornare pretium etiam tortor imperdiet
              tellus. Id purus etiam nunc hendrerit quam in. Dui netus lectus
              nulla cursus ultrices nulla. Morbi sit in gravida fermentum. Non
              sed lobortis amet eget sed donec.At a enim parturient id.
              Suspendisse ullamcorper fermentum accumsan diam tellus. Nibh
              pretium ultrices scelerisque dolor at etiam lectus gravida sed.
              Sit in turpis suspendisse et aliquam. Vulputate sit phasellus
              proin eget arcu. Enim nec ante velit erat nibh nunc amet. Tellus
              at sit imperdiet non. Cras dictum curabitur urna mauris in. Ut dui
              odio sagittis ut imperdiet ultricies mauris ac. A sit id etiam
              vitae non posuere tristique. Morbi sit mi sed nam amet tristique
              tellus. Sed quam aliquam pharetra nunc ipsum mattis. Volutpat
              pellentesque cras euismod habitant sit nibh. Dictum odio at
              aliquam sed. Orci odio lacinia id sem.
            </p>
          </span>

          <div className="flex items-center">
            <div>
              <Image
                src="/Image04.png"
                alt=""
                width="200"
                height="200"
                className="my-4 ml-4 mr-2"
              ></Image>
            </div>
            <div>
              <Image
                src="/Image03.png"
                alt=""
                width="200"
                height="200"
                className="mx-2 mt-4 mb-2"
              ></Image>
              <Image
                src="/Image02.png"
                alt=""
                width="200"
                height="200"
                className="mt-4 mx-2 mb-4"
              ></Image>
            </div>
            <div>
              <Image
                src="/Image05.png"
                alt=""
                width="200"
                height="200"
                className="mt-4 mb-2 ml-2 mr-4"
              ></Image>
              <Image
                src="/Image01.png"
                alt=""
                width="200"
                height="200"
                className="ml-2 mr-4 mt-4 mb-4"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonBlog;
