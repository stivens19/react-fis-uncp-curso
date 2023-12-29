import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 px-10 pt-5 pb-5">
      <section>
        <h3 className="text-gray-300 text-2xl font-title">API</h3>
        <p className="text-gray-400">Consumo de la API</p>
        <div className="flex flex-row mt-3 flex-wrap">
          <div className="basis-1/3">
            <div className="flex p-3 bg-slate-50 rounded-sm shadow-md shadow-lime-600">
              <img
                className="w-1/3 rounded-sm mr-2"
                src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
                alt=""
              />
              {/* unknown,Alive,Dead */}
              <div>
                <h4 className="font-title text-gray-400 text-3xl">
                  Jerry Smith
                </h4>
                <p className="text-black">
                  {" "}
                  <b>Especie:</b> Human
                </p>
                <p className="text-black">
                  {" "}
                  <b>Género:</b> Human
                </p>
                <p className="text-black mt-2">
                  {" "}
                  <b>Estado:</b>
                </p>
                <span className="rounded-md bg-green-700 font-title px-3 text-center text-white">
                  Alive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
